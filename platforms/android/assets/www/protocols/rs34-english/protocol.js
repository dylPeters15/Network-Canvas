/* global session, module, global, console */
/* @sopantech: changes in sessionParameter name and add stages */
var protocol = {
    "sessionParameters": {
        "name": "RS34English"
    },
    "stages": [
        {icon:'fa-file-text', label:'Intro', page:'intro.html'},        
        {icon:'fa-file-text', label:'Load Previous Data', page:'load.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.revisitSkip(); }},
        {icon:'fa-file-text', label:'Mobile Status', page:'mobile.html'},
        {icon:'fa-file-text', label:'Yes: Mobile', page:'mobileyes.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.mobileYesSkip(); }},
        {icon:'fa-file-text', label:'No: Mobile', page:'mobileno.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.mobileNoSkip(); }},
        {icon:'fa-file-text', label:'Yes: Mobile Access', page:'mobileaccessyes.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.mobileAccessYesSkip(); }},
        {icon:'fa-file-text', label:'Computer Status', page:'computer.html'},
        {icon:'fa-file-text', label:'Yes: Computer', page:'computeryes.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.computerYesSkip(); }},
        {icon:'fa-file-text', label:'No: Computer', page:'computerno.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.computerNoSkip(); }},
        {icon:'fa-file-text', label:'Yes: Computer Access', page:'computeraccessyes.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.computerAccessYesSkip(); }},
        {icon:'fa-user-plus', label:'NG: closest', page:'namegen1.html'},
        {icon:'fa-user-plus', label:'NG: very personal and private', page:'namegen5.html'},
        {icon:'fa-user-plus', label:'NG: borrow money', page:'namegenmod6.html'},
        {icon:'fa-user-plus', label:'NG: advice about health', page:'namegen7.html'},
        {icon:'fa-user-plus', label:'NG: made at your clinic', page:'namegenmod8.html'},
        {icon:'fa-user-plus', label:'NG: had sex', page:'namegenmod9.html'},
        {icon:'fa-connectdevelop', label:'EG: layout', page:'canvaslayout.html'},
        {icon:'fa-connectdevelop', label:'EG: social', page:'canvasedge1.html'},
       /* {icon:'fa-connectdevelop', label:'NET NI: who recruited', page:'canvasselect2.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.seedSkip(); }},
        {icon:'fa-connectdevelop', label:'NET NI: who drunk with', page:'canvasselect3.html'},
        {icon:'fa-connectdevelop', label:'NET NI: who drugs with', page:'canvasselect4.html'},
        {icon:'fa-connectdevelop', label:'NET NI: who sex with', page:'canvasselect5.html'},*/
        {icon:'fa-sort', label:'NI G: contact frequency', page:'ordbin1a.html'},
        {icon:'fa-sort', label:'NI G: relationship strength', page:'ordbin1.html'},
        {icon:'fa-sort', label:'NI G: trust strength', page:'ordbin2.html'},
        {icon:'fa-connectdevelop', label:'NISS ISS: who given money', page:'canvasselect3.html'},
        {icon:'fa-connectdevelop', label:'NISS ISS: who given place', page:'canvasselect4.html'},
        {icon:'fa-connectdevelop', label:'NISS ESS: whom you talked personal', page:'canvasselect5.html'},  
        {icon:'fa-connectdevelop', label:'NISS MSS: medical services information', page:'canvasselect6.html'},
        {icon:'fa-connectdevelop', label:'NISS MSS: helped to appointment', page:'canvasselect8.html'},
        {icon:'fa-connectdevelop', label:'NISS MSS: helped to medication', page:'canvasselect9.html'},
        {icon:'fa-connectdevelop', label:'NI SN: had sex', page:'canvasselect10.html'},
        {icon:'fa-connectdevelop', label:'NI HS: disclosed you HIV', page:'canvasselect11.html'},
        {icon:'fa-connectdevelop', label:'NI HS: your knowledge HIV people', page:'canvasselect12.html'},
        {icon:'fa-sort', label:'NI CSM: contact frequency talked using phone', page:'ordbin3.html'},
        {icon:'fa-sort', label:'NI CSM: contact frequency writing using phone', page:'ordbin4.html'},
        {icon:'fa-connectdevelop', label:'NI CSM: used your phone medical', page:'canvasselect13.html'},
        {icon:'fa-connectdevelop', label:'NI CSM: used your phone social', page:'canvasselect14.html'},
        {icon:'fa-sort', label:'NI CSM: contact frequency talked, writing using computer', page:'ordbin5.html'},
        {icon:'fa-connectdevelop', label:'NI CSM: used your computer medical', page:'canvasselect15.html'},
        {icon:'fa-connectdevelop', label:'NI CSM: used your computer social', page:'canvasselect16.html'}, 
        {icon:'fa-check-square', label:'AS: connection between the people', page:'singlechoice1.html'},
        {icon:'fa-check-square', label:'AS: answer question', page:'singlechoice2.html'},
        {icon:'fa-check-square', label:'AS: medicle need', page:'singlechoice3.html'},
        {icon:'fa-check-square', label:'AS: social/emotional need', page:'singlechoice4.html'},
        {icon:'fa-check-square', label:'AS: support outside', page:'singlechoice5.html'},
        /*
        {icon:'fa-transgender-alt', label:'CAT: gender identity', page:'multibin5.html'},
        {icon:'fa-file-text', label:'RACE: Hispanic or Latino', page:'canvasselect14.html'},
        {icon:'fa-file-text', label:'RACE: Racial Identity', page:'multibin2.html'},
        {icon:'fa-cubes', label:'CAT: sexuality', page:'multibin3.html'},
        {icon:'fa-cubes', label:'CAT: location', page:'multibin4.html'},
        {icon:'fa-map-marker', label:'MAP: location in Chicago', page:'map1.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.mapSkip(); }},
        {icon:'fa-file-text', label:'LIST SELECT: which drugs?', page:'listselect1.html'},
        {icon:'fa-sort', label:'ORD: Marijuana freq', page:'ordbin6.html',skip: function() { return window.netCanvas.Modules.session.skipFunctions.drugSkip('d1_t0'); }},
        {icon:'fa-sort', label:'ORD: Cocaine or Crack freq', page:'ordbin7.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.drugSkip('d2_t0'); }},
        {icon:'fa-sort', label:'ORD: Heroin freq', page:'ordbin8.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.drugSkip('d3_t0'); }},
        {icon:'fa-sort', label:'ORD: Methamphetamines freq', page:'ordbin9.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.drugSkip('d4_t0'); }},
        {icon:'fa-sort', label:'ORD: Painkillers or Opiates freq', page:'ordbin10.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.drugSkip('d5_t0'); }},
        {icon:'fa-sort', label:'ORD: Poppers freq', page:'ordbin11.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.drugSkip('d6_t0'); }},
        {icon:'fa-sort', label:'ORD: Stimulants or Amphetamines freq', page:'ordbin12.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.drugSkip('d7_t0'); }},
        {icon:'fa-sort', label:'ORD: Depressants or Tranquilizers freq', page:'ordbin13.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.drugSkip('d8_t0'); }},
        {icon:'fa-sort', label:'ORD: Ecstasy freq', page:'ordbin14.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.drugSkip('d9_t0'); }},
        {icon:'fa-sort', label:'ORD: Other Drugs freq', page:'ordbin15.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.drugSkip('d10_t0'); }},
        {icon:'fa-connectdevelop', label:'NET EDGE: drugs', page:'canvasedge2.html'},
        {icon:'fa-cubes', label:'CAT: where met sex partners', page:'multibin6.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.sexPartnerSkip(); }},
        {icon:'fa-calendar', label:'DATE: first and last sex', page:'dateinterface1.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.sexPartnerSkip(); }},
        {icon:'fa-cubes', label:'CAT: HIV status of sex partners', page:'multibin7.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.sexPartnerSkip(); }},
        {icon:'fa-cubes', label:'CAT: Vaginal sex?', page:'multibin9.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.vaginalSexSkip(); }},
        {icon:'fa-cubes', label:'CAT: Anal sex?', page:'multibin10.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.analSexSkip(); }},
        {icon:'fa-connectdevelop', label:'NET EDGE: sex', page:'canvasedge3.html'},
        {icon:'fa-check-square', label:'SWITCH: multiple sex partners', page:'multiplepartners.html', skip: function() { return window.netCanvas.Modules.session.skipFunctions.sexPartnerSkip(); }},
        {icon:'fa-connectdevelop', label:'NET NI: who multiple sex partners', page:'canvasselect7.html', skip: function() {return window.netCanvas.Modules.session.skipFunctions.multiSexPartnerSkip(); }},
        {icon:'fa-smile-o', label:'Thank You', page:'thanks.html'}, */
        {icon:'fa-cloud-download', label:'Download Data', page:'download.html'}
       // {icon:'fa-check', label:'Finish', page:'finish.html'}
    ],
    "skipFunctions": {
        "exampleSkip": function() {
            return false;
        },
        "revisitSkip": function() {
            if (typeof window.network !== 'undefined') {
                if (window.network.getEgo().visit_number > 1) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }  
        },
        //@sopanteh : mobileYesSkip 
        "mobileYesSkip": function() {
            if (typeof window.network !== 'undefined') {
               var sessionParameters = window.netCanvas.Modules.session.returnData('sessionParameters');
                if (sessionParameters.mobileStatus === 'yes') {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }  
        }, 
        //@sopanteh : mobileNoSkip 
        "mobileNoSkip": function() {
            if (typeof window.network !== 'undefined') {
               var sessionParameters = window.netCanvas.Modules.session.returnData('sessionParameters');
                if (sessionParameters.mobileStatus === 'no') {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }  
        },
        //@sopanteh : mobileAccessYesSkip 
        "mobileAccessYesSkip": function() {
            if (typeof window.network !== 'undefined') {
               var sessionParameters = window.netCanvas.Modules.session.returnData('sessionParameters');
                if (sessionParameters.mobileStatus === 'no' && sessionParameters.mobileAccess === 'yes') {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }  
        },
         //@sopanteh : computerYesSkip 
         "computerYesSkip": function() {
            if (typeof window.network !== 'undefined') {
               var sessionParameters = window.netCanvas.Modules.session.returnData('sessionParameters');
                if (sessionParameters.computerStatus === 'yes') {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }  
        },
         //@sopanteh : computerNoSkip
         "computerNoSkip": function() {
            if (typeof window.network !== 'undefined') {
               var sessionParameters = window.netCanvas.Modules.session.returnData('sessionParameters');
                if (sessionParameters.computerStatus === 'no') {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }  
        },
         //@sopanteh : computerAccessYesSkip
        "computerAccessYesSkip": function() {
            if (typeof window.network !== 'undefined') {
               var sessionParameters = window.netCanvas.Modules.session.returnData('sessionParameters');
                if (sessionParameters.computerStatus === 'no' && sessionParameters.computerAccess === 'yes') {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }  
        },
        "drugSkip": function(drugVar) {
            if (typeof window.network !== 'undefined') {
                var properties = {};
                properties[drugVar] = 1;

                // are there actually any drug edges?
                var drugEdges = window.network.getEdges({from:window.network.getNodes({type_t0:'Ego'})[0].id, type:'Drugs'});
                var required = window.network.getNodes(properties);

                if (drugEdges.length === 0 || required.length === 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },
        "seedSkip": function() {
            if (window.netCanvas.Modules.session.skipFunctions.revisitSkip() === false) {
                return false;
            }
            if (typeof window.network !== 'undefined') {
                var required = window.network.getNodes({seed_status_t0:'Non-Seed'});
                if (required.length === 0) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        "mapSkip": function() {
            // Don't show map if no participants are from chicago
            if (typeof window.network !== 'undefined') {
                var totalEdges = window.network.getEdges({type:'Dyad', res_cat_p_t0: 'Chicago'});
                if (totalEdges.length > 0) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        },
        "sexPartnerSkip": function() {
            // Don't show if ego has had no sex partners
            if (typeof window.network !== 'undefined') {
                var totalEdges = window.network.getEdges({type:'Sex', from:window.network.getNodes({type_t0:'Ego'})[0].id});
                if (totalEdges.length > 0) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        },
        "vaginalSexSkip": function() {
            // need to skip male participant with only male sex partners or female participant with only female sex partners
              if (typeof window.network !== 'undefined') {
                  // Skip if there are no sex edges between ego and some alters
                  var sexEdges = window.network.getEdges({type:'Sex', from:window.network.getNodes({type_t0:'Ego'})[0].id});
                  if (sexEdges.length > 0) {
                      // Get ego gender
                      var egoGender = window.network.getNodes({type_t0:'Ego'})[0].gender_k;
                      // Get total edges ready for counting
                      var totalEdges = window.network.getEdges({type:'Dyad', from:window.network.getNodes({type_t0:'Ego'})[0].id});
                      // Get male edges ready for counting
                      var maleEdges = window.network.getEdges({type:'Dyad', from:window.network.getNodes({type_t0:'Ego'})[0].id, gender_p_t0: 'Male'});
                      // Get female edges ready for counting
                      var femaleEdges = window.network.getEdges({type:'Dyad', gender_p_t0: 'Female'});
                      // If ego is male AND total edges is the same as male edges
                      // OR
                      // If ego is female and total edges is the same as female edges
                      if ((egoGender === 'Male' && totalEdges.length === maleEdges.length) || (egoGender === 'Female' && totalEdges.length === femaleEdges.length)) {
                          // Skip
                          return true;
                      } else {
                          // Don't skip
                          return false;
                      }
                  } else {
                      // Skip if there are no sex edges
                      return true;
                  }
              } else {
                  // Don't skip if window.network is undefined
                  return false;
              }
        },
        "analSexSkip": function() {
            // need to skip female participant with only female sex partners
            if (typeof window.network !== 'undefined') {
                var sexEdges = window.network.getEdges({type:'Sex', from:window.network.getNodes({type_t0:'Ego'})[0].id});
                if (sexEdges.length > 0) {
                    var totalEdges = window.network.getEdges({type:'Dyad', from:window.network.getNodes({type_t0:'Ego'})[0].id});
                    var femaleEdges = window.network.getEdges({type:'Dyad', from:window.network.getNodes({type_t0:'Ego'})[0].id, gender_p_t0: 'Female'});
                    if (window.network.getNodes({type_t0:'Ego'})[0].gender_k === 'Female' && totalEdges.length === femaleEdges.length) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                  return true;
                }
            } else {
                console.log('window.network undefined.');
                return false;
            }
        },
        "multiSexPartnerSkip": function() {
            if (typeof window.network !== 'undefined') {
                var sexEdges = window.network.getEdges({type:'Sex', from:window.network.getNodes({type_t0:'Ego'})[0].id});
                if (sexEdges.length > 0) {
                    // it is required that ego has answerd 'yes' to the multiple sex question
                    var required = window.network.getNodes({multiple_sex_t0: 'yes'});
                    if (required.length === 0) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    // Skip if there are no sex edges
                    return true;
                }
            } else {
                return false;
            }
        }
    }
};
