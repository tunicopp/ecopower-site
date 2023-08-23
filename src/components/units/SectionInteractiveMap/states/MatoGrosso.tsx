import React from "react";

const MatoGrosso: React.FC = () => {
  return (
    <a
      id="mt"
      className="cursor-pointer fill-beige-200 stroke-beige-300  transition-all duration-300 relative"
    >
      <path
        d="M693.788 455.554C663.438 453.824 559.71 447.753 533.356 445.486L533.164 445.755C531.281 445.025 490.213 427.31 497.589 407.75C490.097 400.372 492.287 389.997 482.567 380.659C473.001 392.917 480.186 409.864 470.159 423.544L377.188 424.159C383.795 426.925 377.725 430.23 379.608 438.069C379.416 438.454 378.801 438.069 377.725 438.607C377.725 438.838 377.456 438.723 377.687 439.722C377.841 442.873 378.647 444.525 381.106 450.404V450.712C380.261 451.134 380.799 452.748 378.724 453.21L378.609 453.44C378.993 463.239 380.453 471.078 380.453 482.837C380.53 483.144 380.76 483.144 381.452 483.528C381.49 483.721 381.874 484.72 380.914 485.68C380.914 485.68 380.722 485.68 380.261 485.527L380.069 485.68C380.299 487.371 379.954 488.101 380.261 492.136C381.298 492.751 408.383 492.367 412.686 492.559L412.916 492.713C412.916 492.943 412.801 492.828 412.686 493.712C412.954 493.904 412.109 493.596 414.837 495.825C435.736 494.211 424.057 502.435 423.519 518.728C439.962 530.717 422.175 559.268 404.08 574.601C404.541 574.831 407.845 577.982 411.763 578.789C412.378 579.519 411.495 581.825 413.723 583.324L413.8 583.516L413.646 583.823C413.646 583.823 413.8 583.977 414.299 584.284C414.145 584.707 414.414 587.512 411.917 588.281C410.649 593.661 414.184 593.968 415.836 601.615L414.914 601.922C418.333 605.227 417.641 610.261 417.757 619.138C417.718 619.138 413.377 619.176 408.46 619.253C419.409 627.131 419.908 639.735 421.253 655.759C436.428 655.413 457.212 660.101 474.845 656.22H476.152L476.459 656.527C476.305 656.374 476.728 656.873 476.459 660.024L475.729 660.601V661.139L476.305 662.291C470.312 668.44 472.617 675.51 475.153 687.307C482.222 692.495 492.018 693.609 495.053 702.14L495.361 701.91C495.361 701.91 496.475 702.255 497.781 702.255C498.011 705.253 503.044 705.445 502.698 708.788H502.737C504.312 703.101 512.303 708.404 520.371 695.531C522.906 686.731 526.325 690.343 536.391 687.73H536.66C543.805 682.12 546.418 687.346 556.253 690.189C562.207 693.609 562.976 696.069 572.196 700.526C579.034 702.448 584.643 692.995 592.634 695.454C600.625 707.251 605.62 693.071 617.414 686.769L617.644 686.962C619.219 694.685 610.729 701.218 608.693 708.365C611.805 708.442 616.838 711.44 625.174 710.786L625.52 710.479C627.249 709.749 631.283 711.978 636.661 711.017C636.277 706.521 629.4 700.987 631.552 694.685C631.436 694.57 631.436 692.034 632.512 690.305C631.014 684.963 638.544 682.158 637.66 674.703C642.001 671.437 649.416 668.171 649.915 660.793C644.806 658.333 651.145 654.375 654.986 650.879L655.14 650.379C655.14 650.379 656.792 649.303 658.482 648.88C659.097 643.27 666.051 645.191 669.624 641.195C672.082 642.54 676.193 637.66 674.887 633.01L675.117 632.587L675.809 633.01C677.422 632.165 678.268 627.938 678.575 624.979C678.46 624.979 678.882 624.979 679.266 624.441C679.266 624.441 679.266 623.864 678.997 622.711C681.034 620.06 684.453 617.293 689.217 614.795L689.601 615.257C689.601 615.257 689.447 615.18 689.908 616.486C690.792 616.909 692.405 616.448 694.326 614.719V614.603C694.633 614.334 694.326 613.297 695.901 612.682L696.132 610.645C696.132 610.645 696.017 610.453 696.862 610.069C696.67 608.57 697.899 605.227 699.436 602.652L699.359 602.307C699.781 597.657 699.013 595.121 701.241 588.819L701.318 588.703L701.433 588.627C704.891 588.742 703.277 581.556 702.97 576.407C707.58 572.257 712.383 561.728 712.267 554.811L712.19 554.619C712.997 553.235 715.187 553.658 714.611 549.239C715.149 549.008 711.268 549.469 712.19 548.009C711.921 547.894 711.921 547.932 711.23 548.086C710.807 546.011 710.5 543.897 708.886 541.746L709.002 541.669H709.155C709.155 541.669 709.232 541.784 709.463 541.861L709.54 541.784C709.463 540.593 710.039 539.094 710.154 537.057C711.268 538.518 708.425 522.378 708.925 519.15C706.428 509.159 709.04 498.63 711.076 485.988C712.306 485.219 709.809 481.108 712.651 480.185C712.651 480.454 712.728 479.34 713.535 478.802C713.535 478.495 713.612 478.571 713.343 477.688C716.877 471.386 717.377 465.468 722.102 456.899L693.75 455.438L693.788 455.554Z"
        fill="inherit"
        stroke="inherit"
        strokeWidth="4.60134"
        mask="url(#path-94-inside-23_2864_9285)"
      />
      <path
        d="M693.788 455.554C663.438 453.824 559.71 447.753 533.356 445.486L533.164 445.755C531.281 445.025 490.213 427.31 497.589 407.75C490.097 400.372 492.287 389.997 482.567 380.659C473.001 392.917 480.186 409.864 470.159 423.544L377.188 424.159C383.795 426.925 377.725 430.23 379.608 438.069C379.416 438.454 378.801 438.069 377.725 438.607C377.725 438.838 377.456 438.723 377.687 439.722C377.841 442.873 378.647 444.525 381.106 450.404V450.712C380.261 451.134 380.799 452.748 378.724 453.21L378.609 453.44C378.993 463.239 380.453 471.078 380.453 482.837C380.53 483.144 380.76 483.144 381.452 483.528C381.49 483.721 381.874 484.72 380.914 485.68C380.914 485.68 380.722 485.68 380.261 485.527L380.069 485.68C380.299 487.371 379.954 488.101 380.261 492.136C381.298 492.751 408.383 492.367 412.686 492.559L412.916 492.713C412.916 492.943 412.801 492.828 412.686 493.712C412.954 493.904 412.109 493.596 414.837 495.825C435.736 494.211 424.057 502.435 423.519 518.728C439.962 530.717 422.175 559.268 404.08 574.601C404.541 574.831 407.845 577.982 411.763 578.789C412.378 579.519 411.495 581.825 413.723 583.324L413.8 583.516L413.646 583.823C413.646 583.823 413.8 583.977 414.299 584.284C414.145 584.707 414.414 587.512 411.917 588.281C410.649 593.661 414.184 593.968 415.836 601.615L414.914 601.922C418.333 605.227 417.641 610.261 417.757 619.138C417.718 619.138 413.377 619.176 408.46 619.253C419.409 627.131 419.908 639.735 421.253 655.759C436.428 655.413 457.212 660.101 474.845 656.22H476.152L476.459 656.527C476.305 656.374 476.728 656.873 476.459 660.024L475.729 660.601V661.139L476.305 662.291C470.312 668.44 472.617 675.51 475.153 687.307C482.222 692.495 492.018 693.609 495.053 702.14L495.361 701.91C495.361 701.91 496.475 702.255 497.781 702.255C498.011 705.253 503.044 705.445 502.698 708.788H502.737C504.312 703.101 512.303 708.404 520.371 695.531C522.906 686.731 526.325 690.343 536.391 687.73H536.66C543.805 682.12 546.418 687.346 556.253 690.189C562.207 693.609 562.976 696.069 572.196 700.526C579.034 702.448 584.643 692.995 592.634 695.454C600.625 707.251 605.62 693.071 617.414 686.769L617.644 686.962C619.219 694.685 610.729 701.218 608.693 708.365C611.805 708.442 616.838 711.44 625.174 710.786L625.52 710.479C627.249 709.749 631.283 711.978 636.661 711.017C636.277 706.521 629.4 700.987 631.552 694.685C631.436 694.57 631.436 692.034 632.512 690.305C631.014 684.963 638.544 682.158 637.66 674.703C642.001 671.437 649.416 668.171 649.915 660.793C644.806 658.333 651.145 654.375 654.986 650.879L655.14 650.379C655.14 650.379 656.792 649.303 658.482 648.88C659.097 643.27 666.051 645.191 669.624 641.195C672.082 642.54 676.193 637.66 674.887 633.01L675.117 632.587L675.809 633.01C677.422 632.165 678.268 627.938 678.575 624.979C678.46 624.979 678.882 624.979 679.266 624.441C679.266 624.441 679.266 623.864 678.997 622.711C681.034 620.06 684.453 617.293 689.217 614.795L689.601 615.257C689.601 615.257 689.447 615.18 689.908 616.486C690.792 616.909 692.405 616.448 694.326 614.719V614.603C694.633 614.334 694.326 613.297 695.901 612.682L696.132 610.645C696.132 610.645 696.017 610.453 696.862 610.069C696.67 608.57 697.899 605.227 699.436 602.652L699.359 602.307C699.781 597.657 699.013 595.121 701.241 588.819L701.318 588.703L701.433 588.627C704.891 588.742 703.277 581.556 702.97 576.407C707.58 572.257 712.383 561.728 712.267 554.811L712.19 554.619C712.997 553.235 715.187 553.658 714.611 549.239C715.149 549.008 711.268 549.469 712.19 548.009C711.921 547.894 711.921 547.932 711.23 548.086C710.807 546.011 710.5 543.897 708.886 541.746L709.002 541.669H709.155C709.155 541.669 709.232 541.784 709.463 541.861L709.54 541.784C709.463 540.593 710.039 539.094 710.154 537.057C711.268 538.518 708.425 522.378 708.925 519.15C706.428 509.159 709.04 498.63 711.076 485.988C712.306 485.219 709.809 481.108 712.651 480.185C712.651 480.454 712.728 479.34 713.535 478.802C713.535 478.495 713.612 478.571 713.343 477.688C716.877 471.386 717.377 465.468 722.102 456.899L693.75 455.438L693.788 455.554Z"
        fill="inherit"
        stroke="inherit"
        strokeWidth="1.15034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </a>
  );
};

export default MatoGrosso;
