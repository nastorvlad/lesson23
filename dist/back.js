$(".chart").on("click",(function(){"hidden"==$(".calculate-wrap").css("visibility")?$(".calculate-wrap").css("visibility","visible"):$(".calculate-wrap").css("visibility","hidden")})),$(".number").on("click",(function(){console.log("Это THIS == ",this),console.log("Это THIS.иннерТекст == ",this.innerText);var t=this.innerText,e=$(".pervoe").text(),o=$(".vtoroye").text();""==$(".operation").text()?0==e?$(".pervoe").text(t):$(".pervoe").text(e+t):0==o?$(".vtoroye").text(t):$(".vtoroye").text(o+t)})),$(".znak").on("click",(function(){var t=this.innerText;console.log(t),$(".operation").text(t)})),$(".ravenstvo").on("click",(function(){var t=$(".operation").text(),e=Number($(".pervoe").text()),o=Number($(".vtoroye").text()),i=0;"+"==t&&(i=e+o),"-"==t&&(i=e-o),"*"==t&&(i=e*o),"/"==t&&(i=e/o),$(".pervoe").text(i),$(".operation").text(""),$(".vtoroye").text("")})),$(".reset").on("click",(function(){$(".pervoe").text(""),$(".operation").text(""),$(".vtoroye").text("")})),$(".nazad").on("click",(function(){var t,e=$(".operation").text(),o=$(".vtoroye").text();""!=e&&""==o?$(".operation").text(""):""!=o?(t=$(".vtoroye").text().slice(0,-1),$(".vtoroye").text(t)):function(){var t=$(".pervoe").text().slice(0,-1);$(".pervoe").text(t)}()}));