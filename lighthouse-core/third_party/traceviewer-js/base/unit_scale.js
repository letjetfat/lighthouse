"use strict";require("./iteration_helpers.js");'use strict';var GREEK_SMALL_LETTER_MU=String.fromCharCode(956);global.tr.exportTo('tr.b',function(){var UnitScale={};function defineUnitScale(name,prefixes){if(UnitScale[name]!==undefined)throw new Error('Unit scale \''+name+'\' already exists');if(prefixes.AUTO!==undefined){throw new Error('\'AUTO\' unit prefix will be added automatically '+'for unit scale \''+name+'\'');}prefixes.AUTO=tr.b.dictionaryValues(prefixes);prefixes.AUTO.sort((a,b)=>a.value-b.value);UnitScale[name]=prefixes;}function convertUnit(value,fromPrefix,toPrefix){if(value===undefined)return undefined;return value*(fromPrefix.value/toPrefix.value);}defineUnitScale('Binary',{NONE:{value:Math.pow(1024,0),symbol:''},KIBI:{value:Math.pow(1024,1),symbol:'Ki'},MEBI:{value:Math.pow(1024,2),symbol:'Mi'},GIBI:{value:Math.pow(1024,3),symbol:'Gi'},TEBI:{value:Math.pow(1024,4),symbol:'Ti'}});defineUnitScale('Metric',{NANO:{value:1e-9,symbol:'n'},MICRO:{value:1e-6,symbol:GREEK_SMALL_LETTER_MU},MILLI:{value:1e-3,symbol:'m'},NONE:{value:1,symbol:''},KILO:{value:1e3,symbol:'k'},MEGA:{value:1e6,symbol:'M'},GIGA:{value:1e9,symbol:'G'}});return{UnitScale:UnitScale,convertUnit:convertUnit};});