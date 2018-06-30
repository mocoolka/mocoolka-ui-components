import * as React from 'react';
import {
    Table, Root
} from '../src/';
import { ThemeProvider } from 'styled-components';
import { injectGlobalStyle, buildTheme, P } from '../src';
injectGlobalStyle();

const theme = buildTheme();
export default () => (
    <ThemeProvider theme={theme}  >
        <Root width="content" align="center">
            <Table.Table>
                <Table.TableCaption>A test table with merged cells</Table.TableCaption>
                <Table.TableColumnGroup>
                    <Table.TableColumn />
                    <Table.TableColumn />
                </Table.TableColumnGroup>
                <Table.TableHead>
                    <Table.TableRow>
                        <Table.TableHeadCell><P color="secondary">Compontens</P></Table.TableHeadCell>
                        <Table.TableHeadCell><P color="secondary">Count</P></Table.TableHeadCell>
                    </Table.TableRow>
                </Table.TableHead>
                <Table.TableBody>
                    <Table.TableRow>
                        <Table.TableCell>
                            <P gutterBottom>Table</P>
                            <P gutterBottom>Dialog</P>
                            <P gutterBottom>Nav</P>
                        </Table.TableCell>
                        <Table.TableCell><P>13</P></Table.TableCell>
                    </Table.TableRow>
                    <Table.TableRow>
                        <Table.TableCell>
                            <P gutterBottom>Table</P>
                            <P gutterBottom>Dialog</P>
                        </Table.TableCell>
                        <Table.TableCell><P>12</P></Table.TableCell>
                    </Table.TableRow>
                </Table.TableBody>
            </Table.Table>
            <Table.Table>
                <Table.TableCaption>A test table with merged cells</Table.TableCaption>
                <Table.TableColumnGroup>
                    <Table.TableColumn />
                    <Table.TableColumn />
                    <Table.TableColumn />
                    <Table.TableColumn />
                </Table.TableColumnGroup>
                <Table.TableHead>
                    <Table.TableRow>
                        <Table.TableHeadCell rowSpan={2} />
                        <Table.TableHeadCell colSpan={2}>Average</Table.TableHeadCell>
                        <Table.TableHeadCell rowSpan={2}>Red eyes</Table.TableHeadCell>
                    </Table.TableRow>
                    <Table.TableRow>
                        <Table.TableHeadCell>Height</Table.TableHeadCell>
                        <Table.TableHeadCell>Weight</Table.TableHeadCell>
                    </Table.TableRow>
                </Table.TableHead>
                <Table.TableBody>
                    <Table.TableRow>
                        <Table.TableHeadCell >Males</Table.TableHeadCell>
                        <Table.TableCell >1.9</Table.TableCell>
                        <Table.TableCell>0.003</Table.TableCell>
                        <Table.TableCell>40%</Table.TableCell>
                    </Table.TableRow>
                    <Table.TableRow>
                        <Table.TableHeadCell >Females</Table.TableHeadCell>
                        <Table.TableCell>1.7</Table.TableCell>
                        <Table.TableCell>0.002</Table.TableCell>
                        <Table.TableCell>43%</Table.TableCell>
                    </Table.TableRow>
                </Table.TableBody>
            </Table.Table>
        </Root>
    </ ThemeProvider >
);
