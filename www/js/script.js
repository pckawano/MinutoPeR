// JavaScript Document
/*jslint browser: true*/
/*global $, jQuery, alert, console, popup, subject, video*/

$(document).ready(function () {

    "use strict";

    //Variables
    var theme, subject, subjectObj, btnURL, p, i, classBtn, musc_orto_pia, musc_pia, musc_orto_calc, musc_calc, tab, epilepsia, enxaqueca, path, video = [0, 0, 0, 0, 0, 0, 0];



    musc_pia = {
        "consideracoes": {
            "p1": "PER_01",
            "p2": "PER_02",
            "p3": "PER_03"
            
        },
        "abordagem": {
            "p1": "PER_04",
            "p2": "PER_05",
            "p3": "PER_06"
            
        },
        "manejo": {
            "p1": "PER_07",
            "p2": "PER_08",
            "p3": "PER_09",
            "p4": "PER_10",
            "p5": "PER_11",
            "p6": "PER_12"
        },
        "principais": {
            "p1": "PER_13",
            "p2": "PER_14",
            "p3": "PER_15",
            "p4": "PER_16",
            "p5": "PER_17",
            "p6": "PER_18"
        },
    };
    
    musc_calc = {
        "longevidade": {
            "p1": "PER_01",
            "p2": "PER_02",
            "p3": "PER_03"
            
        },
        "metabolismo": {
            "p1": "PER_04",
            "p2": "PER_05",
            "p3": "PER_06"
            
        },
        "estrategias": {
            "p1": "PER_07",
            "p2": "PER_08",
            "p3": "PER_09",
            "p4": "PER_10",
            "p5": "PER_11"
            
        },
        "riscos": {
            "p1": "PER_12",
            "p2": "PER_13",
            "p3": "PER_14"
            
        },
    };

    musc_orto_pia = {
        "consideracoes": {
            "p1": "PER_01",
            "p2": "PER_02",
            "p3": "PER_03",
            "p4": "PER_04"
            
        },
        "abordagem": {
            "p1": "PER_05",
            "p2": "PER_06",
            "p3": "PER_07"
            
        },
        "manejo": {
            "p1": "PER_08",
            "p2": "PER_09",
            "p3": "PER_10",
            "p4": "PER_11",
            "p5": "PER_12",
            "p6": "PER_13"
        },
        "principais": {
            "p1": "PER_14",
            "p2": "PER_15",
            "p3": "PER_16",
            "p4": "PER_17",
            "p5": "PER_18",
            "p6": "PER_19",
            "p7": "PER_20"
        },
    };
    
    musc_orto_calc = {
        "longevidade": {
            "p1": "PER_01",
            "p2": "PER_02",
            "p3": "PER_03"
            
        },
        "metabolismo": {
            "p1": "PER_04",
            "p2": "PER_05",
            "p3": "PER_06"
            
        },
        "estrategias": {
            "p1": "PER_07",
            "p2": "PER_08",
            "p3": "PER_09",
            "p4": "PER_10",
            "p5": "PER_11",
            "p6": "PER_12"
        },
        "riscos": {
            "p1": "PER_13",
            "p2": "PER_14",
            "p3": "PER_15"
        },
    };



    tab = {
        "episodios": {
            "p1": "PER_02",
            "p2": "PER_03",
            "p3": "PER_10",
            "p4": "PER_11",
            "p5": "PER_13"
        },
        "mania": {
            "p1": "PER_01",
            "p2": "PER_07",
            "p3": "PER_09",
            "p4": "PER_13"
        },
        "comorbidades": {
            "p1": "PER_04",
            "p2": "PER_05",
            "p3": "PER_06"
        },
        "diferencas": {
            "p1": "PER_16",
            "p2": "PER_14",
            "p3": "PER_15"
        },
        "info": {
            "p1": "PER_08",
            "p2": "PER_12",
            "p3": "PER_17"
        },
        "seguranca": {
            "p1": "PER_18",
            "p2": "PER_19",
            "p3": "PER_20",
            "p4": "PER_21"
        }
    };
    epilepsia = {
        "epilepsias": {
            "p1": "PER_03",
            "p2": "PER_05",
            "p3": "PER_06",
            "p4": "PER_04",
            "p5": "PER_09"
        },
        "diferencas": {
            "p1": "PER_13",
            "p2": "PER_14",
            "p3": "PER_12",
            "p4": "PER_15"
        },
        "mulher": {
            "p1": "PER_10",
            "p2": "PER_11",
            "p3": "PER_16",
            "p4": "PER_18",
            "p5": "PER_19"
        },
        "comorbidades": {
            "p1": "PER_01",
            "p2": "PER_02",
            "p3": "PER_07",
            "p4": "PER_08"
        },
        "seguranca": {
            "p1": "PER_17",
            "p2": "PER_20",
            "p3": "PER_21"
        }
    };
    enxaqueca = {
        "profilaxia": {
            "p1": "PER_01",
            "p2": "PER_02",
            "p3": "PER_03",
            "p4": "PER_10",
            "p5": "PER_12",
            "p6": "PER_19"
        },
        "depakote": {
            "p1": "PER_04",
            "p2": "PER_05",
            "p3": "PER_11",
            "p4": "PER_13",
            "p5": "PER_20"
        },
        "diferencas": {
            "p1": "PER_14",
            "p2": "PER_15"
        },
        "info": {
            "p1": "PER_06",
            "p2": "PER_08",
            "p3": "PER_09",
            "p4": "PER_16"
        },
        "seguranca": {
            "p1": "PER_07",
            "p2": "PER_17",
            "p3": "PER_18"
        }
    };
    path = "videos/";

    //Setup
    
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(StatusBar);
        StatusBar.hide();
        window.plugins.insomnia.keepAwake();
    }
    
    $(document).on("touchstart", function (e) {
        e.preventDefault();
    });

    $(document).on("touchmove", function (e) {
        e.preventDefault();
    });

    function popup(index) {
        $("#videomp4").attr("src", "");
        $("#videomp4").attr("src", index);
        $(".popUp_video").fadeIn("fast");
        $("#videomp4")[0].autoplay = true;
    }

    function drawButtons(theme, subject, subjectObj) {
        $(".h_questions").empty().animate({
            left: '0px'
        }); //Reseta o holder

        $(".t").css("background", "url(css/images/t_" + theme + "_" + subject + ".png) no-repeat"); //Desenha o título
        for (i = 1; i <= Object.keys(subjectObj).length; i = i + 1) {
            video[i - 1] = path + theme + "/" + subjectObj[Object.keys(subjectObj)[i - 1]] + ".mp4";
            classBtn = "btn_p btn_p" + i;
            btnURL = "url(css/images/btn_" + theme + "_" + subject + "_p" + i + ".png)";

            if (i % 2 === 1) {
                $("<div class='" + classBtn + "'></div>").appendTo(".h_questions").css("background", btnURL);
            } else {
                $("<div class='" + classBtn + "'></div>").appendTo(".h_questions").css("background", btnURL);
                $("<br>").appendTo(".h_questions");
            }


            if (Object.keys(subjectObj).length <= 4) {
                $(".btn_proxima").hide();
                $(".btn_anterior").hide();
                $(".h_questions").css({
                    "column-count": ""
                });
            } else {
                $(".btn_proxima").fadeIn();
                $(".h_questions").css("column-count", 2);
            }

            console.log(subjectObj[Object.keys(subjectObj)[i - 1]]);
        }
        $.mobile.navigate("#p");
    }

    function fechar() {
        $(".popUp_video").fadeOut("fast", function () {
            $("#videomp4").attr("src", "");
        });
    }

    $(".footer").load("assets/footer.html");

    //Navigation
    $(document).on("tap", ".btn_iniciar", function () {
        $.mobile.navigate("#p_menu");
    });
    $(document).on("tap", ".btn_back", function () {
        window.history.back();
    });
    $(document).on("tap", ".btn_home", function () {
        $.mobile.navigate("#p_menu");
    });
	$(document).on("tap", ".btn_snc, .btn_menu_snc", function () {
        $.mobile.navigate("#p_menu_depakote");
    });
	$(document).on("tap", ".btn_musc, .btn_menu_musc, .btn_musc_reu, .btn_reu", function () {
        $.mobile.navigate("#p_menu_reumatismo");
    });
	$(document).on("tap", ".btn_musc_ort", function () {
        $.mobile.navigate("#p_menu_ortopedia");
    });
		
    $(document).on("tap", ".btn_menu_depakote", function () {
        $.mobile.navigate("#p_bula_depakote");
    });

    $(document).on("tap", ".btn_menu_bula", function () {
        $.mobile.navigate("#p_bula");
    });

    $(document).on("tap", ".l_depakote_bula", function () {
        $.mobile.navigate("#p_bula_depakote");
    });
    $(document).on("tap", ".l_piascledine", function () {
        $.mobile.navigate("#p_bula_piascledine");
    });
    $(document).on("tap", ".l_calcitotal", function () {
        $.mobile.navigate("#p_bula_calcitotal");
    });



    $(document).on("tap", ".btn_tab, .btn_menu_tab", function () {
        $.mobile.navigate("#p_tab_menu");
    });
    $(document).on("tap", ".btn_epilepsia, .btn_menu_epilepsia", function () {
        $.mobile.navigate("#p_epilepsia_menu");
    });
    $(document).on("tap", ".btn_enxaqueca, .btn_menu_enxaqueca", function () {
        $.mobile.navigate("#p_enxaqueca_menu");
    });
    $(document).on("tap", ".btn_proxima", function () {
        $(".h_questions").animate({
            left: '-1024px'
        }, "swing", function () {
            $(".btn_proxima").fadeOut();
            $(".btn_anterior").fadeIn();
        });
    });
    $(document).on("tap", ".btn_anterior", function () {
        $(".h_questions").animate({
            left: '0px'
        }, "swing", function () {
            $(".btn_proxima").fadeIn();
            $(".btn_anterior").fadeOut();
        });
    });

    // Reu

    $(document).on("tap", ".btn_menu_reu_pia, .l_reu_pia", function () {
        $.mobile.navigate("#p_menu_musc_pia");
    });

    $(document).on("tap", ".btn_menu_reu_calc, .l_reu_calc", function () {
        $.mobile.navigate("#p_menu_musc_calc");
    });
  
    // orto
   
     $(document).on("tap", ".btn_menu_orto_pia, .l_orto_pia", function () {
     $.mobile.navigate("#p_menu_orto_musc_pia");
    });

    $(document).on("tap", ".btn_menu_orto_calc, .l_orto_calc", function () {
    $.mobile.navigate("#p_menu_orto_musc_calc");
    });

    //musc_pia

    $(document).on("tap", ".btn_consideracoes_reu_pia", function () {
        drawButtons("musc_pia","consideracoes", musc_pia.consideracoes);
    });

    $(document).on("tap", ".btn_abordagem_reu_pia", function () {
        drawButtons("musc_pia","abordagem", musc_pia.abordagem);
    });

    $(document).on("tap", ".btn_manejo_reu_pia", function () {
        drawButtons("musc_pia","manejo", musc_pia.manejo);
    });

    $(document).on("tap", ".btn_principais_reu_pia", function () {
        drawButtons("musc_pia","principais", musc_pia.principais);
    });


     //musc_calc

     $(document).on("tap", ".btn_longevidade_reu_calc", function () {
        drawButtons("musc_calc","longevidade", musc_calc.longevidade);
    });

    $(document).on("tap", ".btn_metabolismo_reu_calc", function () {
        drawButtons("musc_calc","metabolismo", musc_calc.metabolismo);
    });

    $(document).on("tap", ".btn_estrategias_reu_calc", function () {
        drawButtons("musc_calc","estrategias", musc_calc.estrategias);
    });

    $(document).on("tap", ".btn_riscos_reu_calc", function () {
        drawButtons("musc_calc","riscos", musc_calc.riscos);
    });

     //musc_orto_pia

     $(document).on("tap", ".btn_consideracoes_orto_pia", function () {
        drawButtons("musc_orto_pia","consideracoes", musc_orto_pia.consideracoes);
    });

    $(document).on("tap", ".btn_abordagem_orto_pia", function () {
        drawButtons("musc_orto_pia","abordagem", musc_orto_pia.abordagem);
    });

    $(document).on("tap", ".btn_manejo_orto_pia", function () {
        drawButtons("musc_orto_pia","manejo", musc_orto_pia.manejo);
    });

    $(document).on("tap", ".btn_principais_orto_pia", function () {
        drawButtons("musc_orto_pia","principais", musc_orto_pia.principais);
    });


     //musc_orto_calc

     $(document).on("tap", ".btn_longevidade_orto_calc", function () {
        drawButtons("musc_orto_calc","longevidade", musc_orto_calc.longevidade);
    });

    $(document).on("tap", ".btn_metabolismo_orto_calc", function () {
        drawButtons("musc_orto_calc","metabolismo", musc_orto_calc.metabolismo);
    });

    $(document).on("tap", ".btn_estrategias_orto_calc", function () {
        drawButtons("musc_orto_calc","estrategias", musc_orto_calc.estrategias);
    });

    $(document).on("tap", ".btn_riscos_orto_calc", function () {
        drawButtons("musc_orto_calc","riscos", musc_orto_calc.riscos);
    });


    // TAB

    $(document).on("tap", ".btn_tab_episodios", function () {
        drawButtons("tab", "episodios", tab.episodios);
    });

    $(document).on("tap", ".btn_tab_mania", function () {
        drawButtons("tab", "mania", tab.mania);
    });

    $(document).on("tap", ".btn_tab_comorbidades", function () {
        drawButtons("tab", "comorbidades", tab.comorbidades);
    });

    $(document).on("tap", ".btn_tab_diferencas", function () {
        drawButtons("tab", "diferencas", tab.diferencas);
    });

    $(document).on("tap", ".btn_tab_info", function () {
        drawButtons("tab", "info", tab.info);
    });

    $(document).on("tap", ".btn_tab_seguranca", function () {
        drawButtons("tab", "seguranca", tab.seguranca);
    });

    // Epilepsia

    
    
    $(document).on("tap", ".btn_epilepsia_epilepsias", function () {
        drawButtons("epilepsia", "epilepsias", epilepsia.epilepsias);
    });
        
    $(document).on("tap", ".btn_epilepsia_diferencas", function () {
        drawButtons("epilepsia", "diferencas", epilepsia.diferencas);
    });
    
    $(document).on("tap", ".btn_epilepsia_mulher", function () {
        drawButtons("epilepsia", "mulher", epilepsia.mulher);
    });
    
    $(document).on("tap", ".btn_epilepsia_comorbidades", function () {
        drawButtons("epilepsia", "comorbidades", epilepsia.comorbidades);
    });
    
    $(document).on("tap", ".btn_epilepsia_seguranca", function () {
        drawButtons("epilepsia", "seguranca", epilepsia.seguranca);
    });
    
    // Enxaqueca

    $(document).on("tap", ".btn_enxaqueca_profilaxia", function () {
        drawButtons("enxaqueca", "profilaxia", enxaqueca.profilaxia);
    });
    
    $(document).on("tap", ".btn_enxaqueca_depakote", function () {
        drawButtons("enxaqueca", "depakote", enxaqueca.depakote);
    });
    
    $(document).on("tap", ".btn_enxaqueca_diferencas", function () {
        drawButtons("enxaqueca", "diferencas", enxaqueca.diferencas);
    });
    
    $(document).on("tap", ".btn_enxaqueca_info", function () {
        drawButtons("enxaqueca", "info", enxaqueca.info);
    });
    
    $(document).on("tap", ".btn_enxaqueca_seguranca", function () {
        drawButtons("enxaqueca", "seguranca", enxaqueca.seguranca);
    });

    // Video

    $(document).on("tap", ".btn_p1", function () {
        console.log(video[0]);
        popup(video[0]);
    });
    $(document).on("tap", ".btn_p2", function () {
        console.log(video[1]);
        popup(video[1]);
    });
    $(document).on("tap", ".btn_p3", function () {
        console.log(video[2]);
        popup(video[2]);
    });
    $(document).on("tap", ".btn_p4", function () {
        console.log(video[3]);
        popup(video[3]);
    });
    $(document).on("tap", ".btn_p5", function () {
        console.log(video[4]);
        popup(video[4]);
    });
    $(document).on("tap", ".btn_p6", function () {
        console.log(video[5]);
        popup(video[5]);
    });
    $(document).on("tap", ".btn_p7", function () {
        console.log(video[6]);
        popup(video[6]);
    });

    $("#videomp4").on("ended", function () {
        fechar();
    });
    $("#videomp4").on("tap", function () {
        if (this.paused) {
            this.play();
        } else {
            this.pause();
        }
    });
    $(document).on("tap", ".close", function () {
        fechar();
    });

    // End of code
});