import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { getReports } from "../Components/fetchData/FetchData";
import { getFirestore } from "firebase/firestore";
import { firebase } from "../firebase/clientApp";

const AccidentReportTable = () => {
  const db = getFirestore(firebase);

  const [reports, setReport] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllReports = () => {
    getReports(db).then((data) => {
      console.log("data", data);
      setReport(data);
    });
  };

  useEffect(() => {
    fetchAllReports();
  });

  // const data = getReports(db);

  return (
    <TableContainer>
      <Table>
        <Thead>
          {/* <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th>multiply by</Th>
          </Tr> */}
        </Thead>
        {reports.map((report) => (
          <>
            <Tbody>
              <Tr>
                <Td>{report.data.route}</Td>
                <Td>time</Td>
                <Td><Button>Talk view</Button></Td>
                <Td>25.4</Td>
              </Tr>
            </Tbody>
          </>
        ))}
      
      </Table>
    </TableContainer>
  );
};

export default AccidentReportTable;
