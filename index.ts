import { TestDto } from "./output";

// Results in error:
// Type 'string[]' is missing the following properties from type 'Set<string>': add, clear, delete, has, and 2 more.ts(2740)
// testDto.ts(15, 5): The expected type comes from property 'a' which is declared here on type 'TestDto'
const testObject: TestDto = {a: ['foo', 'bar']};