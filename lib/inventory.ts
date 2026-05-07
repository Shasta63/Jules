import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

export interface Product {
  Title: string;
  Description: string;
  Price: string;
  ImageURL: string;
}

export function getInventory(): Product[] {
  const csvFilePath = path.join(process.cwd(), 'data', 'inventory.csv');
  const csvFile = fs.readFileSync(csvFilePath, 'utf8');

  const results = Papa.parse<Product>(csvFile, {
    header: true,
    skipEmptyLines: true,
  });

  return results.data;
}
