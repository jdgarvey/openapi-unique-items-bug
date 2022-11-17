import { TestDto } from "./output";

const jsonApiResponse = {a: ['foo', 'bar']};
const receivingVariable: TestDto = jsonApiResponse;
// Results in error:
// Type '{ a: string[]; }' is not assignable to type 'TestDto'.
//  Types of property 'a' are incompatible.
//    Type 'string[]' is missing the following properties from type 'Set<string>': add, clear, delete, has, and 2 more.