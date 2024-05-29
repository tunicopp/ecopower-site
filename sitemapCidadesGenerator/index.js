const fs = require('fs');
const { create } = require('xmlbuilder2');

const removeSpecialChars = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()

const dadosCidades = require('../public/assets/json/dadosCidades.json');

const generateSitemap = (data) => {
  const urlset = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

  data.forEach((entry) => {
    const url = urlset.ele('url');
    const cidadeSlug = removeSpecialChars(entry.cidade);
    const ufSlug = removeSpecialChars(entry.uf);

    url.ele('loc').txt(`https://www.ecopower.com.br/energia-solar/${ufSlug}/${cidadeSlug}`);
    
    const now = new Date();
    const utcOffset = -3 * 60; // UTC-3 em minutos
    const adjustedDate = new Date(now.getTime() + utcOffset * 60000);

    const formattedDate = adjustedDate.toISOString().slice(0, 19).replace('T', ' ');

    url.ele('lastmod').txt(formattedDate);
    url.ele('changefreq').txt('monthly');
    url.ele('priority').txt('0.8');
  });

  return urlset.end({ prettyPrint: true });
};

const main = async () => {
  try {
    fs.writeFileSync('sitemap.xml', generateSitemap(dadosCidades));
    console.log('Sitemap gerado com sucesso!');
  } catch (err) {
    console.error('Erro ao gerar o sitemap:', err);
  }
};

main();
