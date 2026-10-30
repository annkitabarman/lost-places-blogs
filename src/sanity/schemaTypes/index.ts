import { type SchemaTypeDefinition } from "sanity";
import { lostPlace } from "./lostPlaces";
import { theme } from "./theme";
import { civilization } from "./civilization";
import { source } from "./source";
import { timelineEvent } from "./timelineEvents";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [lostPlace, theme, civilization, source, timelineEvent],
};
