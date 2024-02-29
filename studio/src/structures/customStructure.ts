import { StructureBuilder } from "sanity/desk";

const exludedFoodSchemas = ["pizza", "burger", "standing_offer", "side_dish", "dressing", "drink"]
const excludedSchemas: string[] = ['homepage_settings', "opening_hours", ...exludedFoodSchemas];

export const customStructure = (S: StructureBuilder) =>
    S.list()
    .title('Obsah')
    .items([
    S.listItem()
        .title('Úvodná stránka')
        .child(
            S.document().schemaType("homepage_settings").documentId("homepage_settings").title("Úvodná stránka")
        /* S.list()
            // Sets a title for our new list
            .title('Nastavenia stránok')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
                S.listItem()
                    .title('Úvod')
                    .child(S.document().schemaType('homepageSettings').documentId('homepageSettings')),
                S.listItem()
                    .title('Menu')
                    .child(S.document().schemaType('menuSettings').documentId('menuSettings')),
                S.listItem()
                    .title('Kontakt')
                    .child(S.document().schemaType('contactSettings').documentId('contactSettings')),
            ]) */
        ),
    
    S.listItem()
        .title('Menu (Ponuka)')
        .child(S.list()
            .title("Kategórie jedál")
            .items([
                S.documentTypeListItem("pizza").title("Pizza"),
                S.documentTypeListItem("burger").title("Burgre"),
                S.documentTypeListItem("standing_offer").title("Stála ponuka"),
                S.documentTypeListItem("side_dish").title("Prílohy"),
                S.documentTypeListItem("dressing").title("Dressingy"),
                S.documentTypeListItem("drink").title("Nápoje"),
            ])
        ),

    S.listItem()
        .title('Otváracie hodiny')
        .child(S.document().schemaType("opening_hours").documentId("opening_hours").title("Otváracie hodiny")),

    /* S.listItem()
        .title('Kontakty')
        .child(S.document().schemaType("contacts").documentId("contacts").title("Kontakty")), */

    // remove the singletons from the main list
    ...S.documentTypeListItems().filter(
        (listItem) => !excludedSchemas.includes(listItem.getId() as string)
    ),
    ])