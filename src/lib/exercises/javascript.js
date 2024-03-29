export const javascript = [
	// functions
	'function <variableName>(<params>) {',
	'export async function <variableName>(<params>) {',
	'async function <variableName>(<params>) {',
	'export const <variableName> = async (<params>) => {',
	'export const <variableName> = (<params>) => {',

	'<variableName>.filter((<variableName>) => <variableName> == <randomNumber>)<;>',

	// variables
	'<variableModifier> <variableName> = <randomNumber><;>',
	"<variableModifier> <variableName> = <'><randomString><'><;>",
	'<variableModifier> <variableName> = <randomBoolean><;>',
	"<variableModifier> res = await fetch(<'>/api/<variableName><'>)<;>",

	'<variableName> = <randomNumber><;>',
	"<variableName> = <'><randomString><'><;>",
	'<variableName> = <randomBoolean><;>',

	// common syntax
	'console.log(<variableName>)<;>',
	"import { <variableName> } from <'>$lib/components/<variableName><'><;>",

	// scripts
	'npm run dev',
	'npm run test',
	'npm run build',
	'npm run format'
];
