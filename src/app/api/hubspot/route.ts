import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.json();
  const calculator = formData.calculator;

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer pat-na1-6273ec39-e911-4f9c-b986-d59be0d6c65d",
  };

  const searchResp = await fetch(
    `${process.env.HUBSPOT_BASE_URL}/crm/v3/objects/contact/search`,
    {
      method: "POST",
      body: JSON.stringify({
        filterGroups: [
          {
            filters: [
              {
                value: "*" + formData.data.phone,
                propertyName: "phone",
                operator: "EQ",
              },
            ],
          },
        ],
        limit: 1,
      }),
      headers,
    },
  );

  const buildedForm = {
    properties: {
      firstname: formData.data.name,
      phone: "+55" + formData.data.phone,
      email: formData.data.email,
      cidadeinstalacao: formData.data.city.label,
      valor_conta_cliente: formData.currentCost,
      classe: formData.data.location,
      valoraserpago: calculator.valorProjeto,
      valor_parcela_financiamento: calculator.valorParcela,
      geracaosimul: calculator.geracaoMedia,
      potenciasimul: calculator.potencia,
      potenciamodulo: Math.round(calculator.potencia),
      modulossimuldesc: calculator.moduloQtd,
      modelo_do_modulo_ofertado: calculator.moduloModelo,
      inversoressimul: calculator.inversores[0].inversorModelo,
      valordescontosimul: calculator.valorProjeto,
      condicao_especial_site: calculator.condicoesEspeciais[0].condicaoEspecial,
      utm_campaign: "?",
      gatilho_conversao_padrao_ecopower: true,
    },
  };

  const searchRespJson = await searchResp.json();

  const resp = await fetch(
    searchRespJson.total > 0
      ? `${process.env.HUBSPOT_BASE_URL}/crm/v3/objects/contact/${searchRespJson.results[0].id}`
      : `${process.env.HUBSPOT_BASE_URL}/crm/v3/objects/contact`,
    {
      method: searchRespJson.total > 0 ? "PATCH" : "POST",
      body: JSON.stringify(buildedForm),
      headers,
    },
  );

  if (resp.status === 200 || resp.status === 201) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false });
}
