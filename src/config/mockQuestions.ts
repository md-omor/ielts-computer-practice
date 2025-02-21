import { IELTSSection } from "@/types/question";

export const mockQuestionData: IELTSSection[] = [
  {
    part: 1,
    title: "Part 1",
    description: "Listen and answer questions 1 - 10",
    content: [
      {
        title: "Phone call about second-hand furniture",
        categories: [
          {
            label: "Items",
            items: [
              {
                label: "Dining table",
                questions: [
                  {
                    id: 1,
                    type: "text",
                    prefix: "- ",
                    suffix: "shape",
                    placeholder: "round",
                  },
                  { id: 2, type: "static", text: "- medium size" },
                  { id: 3, type: "number", prefix: "- ", suffix: "old" },
                  { id: 4, type: "static", text: "- $25.00" },
                ],
              },
              {
                label: "Dining chairs",
                questions: [
                  {
                    id: 5,
                    type: "number",
                    prefix: "- set of ",
                    suffix: "chairs",
                  },
                  {
                    id: 6,
                    type: "text",
                    prefix: "- seats covered in ",
                    suffix: "material",
                  },
                  { id: 7, type: "text", prefix: "- in ", suffix: "condition" },
                  { id: 8, type: "static", text: "- $20.00" },
                ],
              },
              {
                label: "Desk",
                questions: [
                  { id: 9, type: "number", prefix: "- length " },
                  {
                    id: 10,
                    type: "text",
                    prefix: "- 3 drawers. Top drawer has a ",
                  },
                ],
              },
            ],
          },
          {
            label: "Address",
            questions: [
              {
                id: 11,
                type: "text",
                prefix: "- ",
                suffix: "River Lane, Stonethorpe",
              },
            ],
          },
          {
            label: "Directions",
            text: "Take the Hawtcroft road out of Stonethorpe. Go past the secondary school, then",
            questions: [
              {
                id: 12,
                type: "text",
                prefix: "turn ",
                suffix: "at the crossroads",
              },
              {
                id: 13,
                type: "text",
                prefix: "House is down this road, opposite the ",
              },
            ],
          },
        ],
      },
    ],
  },
];

console.log("Mock data loaded:", mockQuestionData);
