import { Getter } from 'mocoolka-fp/lib/Monocle';
import * as Table from './styles';
import * as React from 'react';
export type SimpleTableType = { header: string[], data: any[][] };
export const simpleTableGetter = new Getter<SimpleTableType, React.ReactElement<any>>(a => (
  <Table.Root key="table">
    <Table.TableHead>
      <Table.TableRow>
        {a.header.map((b, index) => (<Table.TableHeadCell key={index}>{b}</Table.TableHeadCell>))}
      </Table.TableRow>
    </Table.TableHead>
    <Table.TableBody>
      {a.data.map((b, index) => (
        <Table.TableRow key={index}>
          {b.map((c, index) => (<Table.TableCell key={index}>{c}</Table.TableCell>))}
        </Table.TableRow>
      ))}

    </Table.TableBody>
  </Table.Root>
)
);
