import { CommonIndustyTableWrapper } from '@/styles/StyledComponents/CommonIndustyTableWrapper';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';

function createData(
    recommendation: string,
    option1?: string,
    option2?: string,
    option3?: string,
) {
    return { recommendation, option1, option2, option3 };
}

const rows = [
    createData('Governance', 'Board Oversight', 'Management’s Role'),
    createData('Strategy', 'Risk and Opportunities', 'Impact on Organization', 'Resilience of Strategy'),
    createData('Risk Management', 'Risk ID and Assessment Proc.', 'Risk Management Process', 'Integration into Risk Mgmt.'),
    createData('Metrics and Targets', 'Climate-Related Metrics', 'Scope 1,2,3 GHG Emissions ', 'Climate-Related Targets'),
];
export default function CommonIndustyTable() {
    return (
        <CommonIndustyTableWrapper>
            <Box className="mainTable_list">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Recommendation</TableCell>
                                <TableCell>Recommended Disclosure</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.recommendation}
                                >
                                    <TableCell>
                                        {row.recommendation}
                                    </TableCell>
                                    <TableCell>
                                        <List disablePadding>
                                            <ListItem disablePadding>{row?.option1}</ListItem>
                                            <ListItem disablePadding>{row?.option2}</ListItem>
                                            <ListItem disablePadding>{row?.option3}</ListItem>
                                        </List>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </CommonIndustyTableWrapper>
    )
}
