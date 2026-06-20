export type CellValue = string | number | boolean | null;

export interface Cell {
  readonly value: CellValue;
}

export interface Worksheet {
  readonly name: string;
  readonly cells: Readonly<Record<string, Cell>>;
}

export interface Workbook {
  readonly sheets: readonly Worksheet[];
}

export function createWorkbook(sheetName = "Sheet 1"): Workbook {
  return {
    sheets: [
      {
        name: sheetName,
        cells: {},
      },
    ],
  };
}

export function setCellValue(
  workbook: Workbook,
  sheetName: string,
  address: string,
  value: CellValue,
): Workbook {
  return {
    sheets: workbook.sheets.map((sheet) => {
      if (sheet.name !== sheetName) {
        return sheet;
      }

      return {
        ...sheet,
        cells: {
          ...sheet.cells,
          [address.toUpperCase()]: { value },
        },
      };
    }),
  };
}

export function getCellValue(
  workbook: Workbook,
  sheetName: string,
  address: string,
): CellValue | undefined {
  const sheet = workbook.sheets.find((item) => item.name === sheetName);

  return sheet?.cells[address.toUpperCase()]?.value;
}
