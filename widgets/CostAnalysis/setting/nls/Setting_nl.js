// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Configuratietekst instellen:",generalSettings:{tabTitle:"Algemene instellingen",measurementUnitLabel:"Kosteneenheid",currencyLabel:"Kostensymbool",roundCostLabel:"Afgeronde kosten",projectOutputSettings:"Projectuitvoersinstellingen",typeOfProjectAreaLabel:"Type projectgebied",bufferDistanceLabel:"Bufferafstand",csvReportExportLabel:"De gebruiker toestaan om het rapport van het project te exporteren",editReportSettingsBtnTooltip:"Rapportinstellingen bewerken",
roundCostValues:{twoDecimalPoint:"Twee decimale punten",nearestWholeNumber:"Dichtstbijzijnde hele nummer",nearestTen:"Dichtstbijzijnde tien",nearestHundred:"Dichtstbijzijnde honderd",nearestThousand:"Dichtstbijzijnde duizenden",nearestTenThousands:"Dichtstbijzijnde tien duizenden"},reportSettings:{reportSettingsPopupTitle:"Rapportinstellingen",reportNameLabel:"Naam van het rapport (optioneel) :",checkboxLabel:"Weergeven",layerTitle:"Titel",columnLabel:"Label",duplicateMsg:"Dubbel label"},projectAreaType:{outline:"Omtreklijn",
buffer:"Buffer"},errorMessages:{currency:"Ongeldige valuta-eenheid",bufferDistance:"Ongeldige bufferafstand",outOfRangebufferDistance:"De waarde moet groter dan 0 en kleiner dan of gelijk aan 100 zijn"}},projectSettings:{tabTitle:"Projectinstellingen",costingGeometrySectionTitle:"Definieer geografie voor kosten (optioneel)",costingGeometrySectionNote:"Opmerking: als u deze laag configureert, kan de gebruiker kostenvergelijkingen van objectsjablonen instellen op basis van geografische regio's.",projectTableSectionTitle:"Mogelijkheid om projectinstellingen op te slaan/te laden (optioneel)",
projectTableSectionNote:"Opmerking: Door alle tabellen en lagen te configureren, kan de gebruiker het project opslaan/laden voor later gebruik.",costingGeometryLayerLabel:"Kosten geometrielaag",fieldLabelGeography:"Geografie Veld naar laag",projectAssetsTableLabel:"Tabel projectassets",projectMultiplierTableLabel:"Tabel projectmultiplicator extra kosten",projectLayerLabel:"Projectlaag",configureFieldsLabel:"Velden configureren",fieldDescriptionHeaderTitle:"Veldbeschrijving",layerFieldsHeaderTitle:"Laagveld",
selectLabel:"Selecteren",errorMessages:{duplicateLayerSelection:"${layerName} is al geselecteerd",invalidConfiguration:"Selecteer ${fieldsString}"},costingGeometryHelp:"\x3cp\x3ePolygoonla(a)g(en) met de volgende voorwaarden worden getoond: \x3cbr/\x3e \x3cli\x3e Laag moet 'Query'-capaciteit hebben\x3c/li\x3e\x3cli\x3e Laag moet een GlobalID-veld hebben\x3c/li\x3e\x3c/p\x3e",fieldToLabelGeographyHelp:"\x3cp\x3eString en numerieke velden van de geselecteerde 'Costing Geometry Layer' worden weergegeven in de 'Field to Label Geography'-keuzelijst.\x3c/p\x3e",
projectAssetsTableHelp:"\x3cp\x3eTabel(len) met de volgende voorwaarden wordt getoond: \x3cbr/\x3e \x3cli\x3eTabel moet bewerkingsmogelijkheden hebben, namelijk 'Create', 'Delete' en 'Update'\x3c/li\x3e \x3cli\x3eTabel moet zes velden hebben met exacte naam en gegevenstype:\x3c/li\x3e\x3cul\x3e\x3cli\x3e AssetGUID (GUID type veld)\x3c/li\x3e\x3cli\x3e CostEquation (String type veld)\x3c/li\x3e\x3cli\x3e Scenario (String type veld)\x3c/li\x3e\x3cli\x3e TemplateName (String type veld)\x3c/li\x3e\x3cli\x3e GeographyGUID (GUID type veld)\x3c/li\x3e\x3cli\x3e ProjectGUID (GUID type veld)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eTabel(len) met de volgende voorwaarden wordt getoond: \x3cbr/\x3e \x3cli\x3eTabel moet bewerkingsmogelijkheden hebben, namelijk 'Create', 'Delete' en 'Update'\x3c/li\x3e \x3cli\x3eTabel moet vijf velden hebben met exacte naam en gegevenstype:\x3c/li\x3e\x3cul\x3e\x3cli\x3e Beschrijving (String type veld)\x3c/li\x3e\x3cli\x3e Type (String type veld)\x3c/li\x3e\x3cli\x3e Waarde (Float/Double type veld)\x3c/li\x3e\x3cli\x3e Costindex (Integer type veld)\x3c/li\x3e\x3cli\x3e ProjectGUID (GUID type veld))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3ePolygonla(a)g(en) met de volgende voorwaarden wordt getoond: \x3cbr/\x3e \x3cli\x3eLaag moet bewerkingsmogelijkheden hebben, namelijk 'Create', 'Delete' en 'Update'\x3c/li\x3e \x3cli\x3eLaag moet vijf velden hebben met exacte naam en gegevenstype:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectNaam (String type veld)\x3c/li\x3e\x3cli\x3eBeschrijving (String type veld)\x3c/li\x3e\x3cli\x3eTotalassetcost (Float/Double type veld)\x3c/li\x3e\x3cli\x3eGrossprojectcost (Float/Double type veld)\x3c/li\x3e\x3cli\x3eGlobalID (GlobalID type veld)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
pointLayerCentroidLabel:"Centroid puntlaag",selectRelatedPointLayerDefaultOption:"Selecteren",pointLayerHintText:"\x3cp\x3ePuntla(a)g(en) die voldoen aan de volgende voorwaarden zullen worden weergegeven: \x3cbr/\x3e \x3cli\x3e\tLaag moet veld 'Projectid' (GUID-type) hebben\x3c/li\x3e\x3cli\x3e\tLaag moet bewerkingsfuncties hebben, namelijk 'Cre\u00ebren', 'Verwijderen' en 'Bijwerken'\x3c/li\x3e\x3c/p\x3e"},layerSettings:{tabTitle:"Laaginstellingen",layerNameHeaderTitle:"Kaartlaagnaam",layerNameHeaderTooltip:"Lijst van lagen op de kaart",
EditableLayerHeaderTitle:"Bewerkbaar",EditableLayerHeaderTooltip:"Neem de laag en de sjablonen op in de kostenwidget",SelectableLayerHeaderTitle:"Selecteerbaar",SelectableLayerHeaderTooltip:"Geometrie van object kan gebruikt worden om een nieuw kostenelement te genereren",fieldPickerHeaderTitle:"Project-ID (optioneel)",fieldPickerHeaderTooltip:"Optioneel veld (van het type string) om de project-ID in op te slaan",selectLabel:"Selecteren",noAssetLayersAvailable:"Geen assetlaag gevonden in de geselecteerde webkaart",
disableEditableCheckboxTooltip:"Deze laag heeft geen bewerkingsmogelijkheden",missingCapabilitiesMsg:"Deze laag mist de volgende mogelijkheden:",missingGlobalIdMsg:"Deze laag heeft geen GlobalId veld",create:"Maken",update:"Actualiseren",deleteColumnLabel:"Verwijderen",attributeSettingHeaderTitle:"Attribuutinstellingen",addFieldLabelTitle:"Attributen toevoegen",layerAttributesHeaderTitle:"Laagattributen",projectLayerAttributesHeaderTitle:"Projectlaagattributen",attributeSettingsPopupTitle:"Laagattribuutinstellingen"},
costingInfo:{tabTitle:"Kosteninformatie",proposedMainsLabel:"Voorgestelde leidingen",addCostingTemplateLabel:"Voeg kostensjabloon toe",manageScenariosTitle:"Beheer scenario\u2019s",featureTemplateTitle:"Objectsjabloon",costEquationTitle:"Kostenvergelijking",geographyTitle:"Geografie",scenarioTitle:"Scenario",actionTitle:"Acties",scenarioNameLabel:"Scenarionaam",addBtnLabel:"Toevoegen",srNoLabel:"Nee.",deleteLabel:"Verwijderen",duplicateScenarioName:"Scenarionaam dupliceren",hintText:"\x3cdiv\x3eTip: Gebruik de volgende trefwoorden\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: gebruikt het totale aantal van hetzelfde type asset in een geografie\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: gebruikt de lengte voor het regelasset en het gebied voor het vlakasset\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: gebruikt de totale lengte voor het regelasset en het totale gebied voor vlakasset van hetzelfde type in een geografie\x3c/li\x3e\x3c/ul\x3eU kunt functies gebruiken als:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eBewerk de kostenvergelijking volgens uw projectbehoefte.",
noneValue:"Geen",requiredCostEquation:"Ongeldige kostenvergelijking voor ${layerName} : ${templateName}",duplicateTemplateMessage:"Er bestaat een dubbele sjablooninvoer voor ${layerName} : ${templateName}",defaultEquationRequired:"Standaardvergelijking is vereist voor ${layerName} : ${templateName}",validCostEquationMessage:"Voer geldige kostenvergelijking in",costEquationHelpText:"Bewerk de kostenvergelijking volgens uw projectbehoefte",scenarioHelpText:"Selecteer het scenario volgens uw projectbehoefte",
copyRowTitle:"Kopieer rij",noTemplateAvailable:"Voeg ten minste \u00e9\u00e9n sjabloon toe voor ${layerName}",manageScenarioLabel:"Beheer scenario",noLayerMessage:"Voer ten minste \u00e9\u00e9n laag in ${tabName} in",noEditableLayersAvailable:"La(a)g(en) moet(en) worden aangevinkt als bewerkbaar op het tabblad Laaginstellingen",updateProjectCostCheckboxLabel:"Projectvergelijkingen bijwerken",updateProjectCostEquationHint:"Hint: Dit stelt gebruikers in staat kostenvergelijkingen voor activa die al zijn toegevoegd aan bestaande projecten bij te werken met de nieuwe vergelijkingen die hieronder worden gedefinieerd op basis van het object-template, de geografie en het scenario. Als de combinatie niet wordt gevonden, zal de standaard kostenvergelijking worden ingesteld, met geografie en scenario als 'Geen'. Indien het object-template wordt verwijderd, worden de kosten ingesteld op 0."},
statisticsSettings:{tabTitle:"Aanvullende instellingen",addStatisticsLabel:"Voeg statistieken toe",fieldNameTitle:"Veld",statisticsTitle:"Label",addNewStatisticsText:"Voeg nieuwe statistieken toe",deleteStatisticsText:"Verwijder statistieken",moveStatisticsUpText:"Verplaats statistieken omhoog",moveStatisticsDownText:"Verplaats statistieken naar beneden",selectDeselectAllTitle:"Alles selecteren"},projectCostSettings:{addProjectCostLabel:"Bijkomende projectkosten toevoegen",additionalCostValueColumnHeader:"Waarde",
invalidProjectCostMessage:"Ongeldige invoer voor projectkosten",additionalCostLabelColumnHeader:"Label",additionalCostTypeColumnHeader:"Type"},statisticsType:{countLabel:"Aantal",averageLabel:"Gemiddelde",maxLabel:"Maximum",minLabel:"Minimum",summationLabel:"Sommering",areaLabel:"Gebied",lengthLabel:"Lengte"},_localized:{}}});