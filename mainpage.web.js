$w.onReady(function () {
	//ABRE BOX PENAL
	   $w('#button12').onClick(() => {
        $w('#statebox8').changeState("BoxPenal");
})
        //FECHA BOX PENAL
        $w('#vectorImage1').onClick(() => {
        $w('#statebox8').changeState("Closedbox");
    })
	//ABRE BOX EMPRESARIAL
	   $w('#button13').onClick(() => {
        $w('#statebox8').changeState("BoxEmpresarial");
    })
    //FECHA BOX EMPRE
        $w('#vectorImage6').onClick(() => {
        $w('#statebox8').changeState("Closedbox");
    })
	//ABRE BOX RELAÇÕES GOVERNAMENTAIS
	   $w('#button14').onClick(() => {
        $w('#statebox8').changeState("BoxGovernamental");
    })
    //FECHA BOX gov
        $w('#vectorImage9').onClick(() => {
        $w('#statebox8').changeState("Closedbox");
    })
    //ABRE BOX CONTATO
	   $w('#button8').onClick(() => {
        $w('#statebox9').changeState("BoxContato");
    })
    //ABRE BOX CONTATO
	   $w('#button5, #button16, #mobileButton1').onClick(() => {
        $w('#statebox9').changeState("BoxAgendamento");
    })
});
