import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};

const moduleName = 'table';
export const Root = extendBase({
    name: 'Root',
    moduleName,
    tagName: 'table',
    style: {
        typography: 'body2',
        color: 'primary',
        bgColor: 'paper',
        width: 'full',
        mkstyle: {
            tableLayout: 'auto',
            borderCollapse: 'collapse',
            borderSpacing: 0,
        },
        selector: [{
            name: '& td>:last-child',
            value: {
                mkstyle: {
                    marginBottom: 0,
                },
            },
        }, {
            name: '& td>p',
            value: {
                mkstyle: {
                    lineHeight: 24,
                },
            },
        }],
    },
});
export const TableBody = extendBase({
    name: 'TableBody',
    moduleName,
    tagName: 'tbody',
    style: {
        mkstyle: {
            display: 'table-row-group',
        },
    },
});
export const TableCaption = extendBase({
    name: 'TableCaption',
    moduleName,
    tagName: 'caption',
    style: {
        typography: 'caption',
        mkstyle: {
            display: 'table-caption',
        },
    },
});

export const TableHead = extendBase({
    name: 'TableHead',
    moduleName,
    tagName: 'thead',
    style: {
        mkstyle: {
            display: 'table-header-group',
        },
    },
});
export const TableRow = extendBase({
    name: 'TableRow',
    moduleName,
    tagName: 'tr',
    style: {
        mkstyle: {
            display: 'table-row',
        },
    },
});

export const TableColumnGroup = extendBase({
    name: 'TableColumnGroup',
    moduleName,
    tagName: 'colgroup',
    style: {
        mkstyle: {
            display: 'table-column-group',
        },
    },
});
export const TableColumn = extendBase({
    name: 'TableColumn',
    moduleName,
    tagName: 'col',
    style: {
        mkstyle: {
            display: 'table-column',
        },
    },
});
export const TableHeadCell = extendBase({
    name: 'TableHeadCell',
    moduleName,
    tagName: 'th',
    style: {
        bgColor: 'content',
        color: 'secondary',
        border: 'bordered',
        mkstyle: {
            padding: '12px 12px 12px 24px',
            verticalAlign: 'middle',
            display: 'table-cell',
        },
    },
});
export const TableCell = extendBase({
    name: 'TableCell',
    moduleName,
    tagName: 'td',
    style: {
        border: 'bordered',
        box: 'cell',
        mkstyle: {
            padding: '12px 12px 12px 24px',
            display: 'table-cell',
            verticalAlign: 'middle',
        },
    },
});
export const TableFoot = extendBase({
    name: 'TableFoot',
    moduleName,
    tagName: 'tfoot',
    style: {
        mkstyle: {
            display: 'table-footer-group',
        },
    },
});
