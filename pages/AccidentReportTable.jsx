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
import moment from "moment";

const AccidentReportTable = () => {
  const db = getFirestore(firebase);

  const [reports, setReport] = useState([]);

  // const fetchAllReports = () => {
  //   getReports(db).then((data) => {
  //     console.log("data", data);
  //     setReport(data);
  //   });
  // };

 getReports(db).then((data) => {
    console.log("data", data);
    setReport(data);
  });

  return (
    <TableContainer>
      <Table>
        <Thead>
        </Thead>
        {reports.map((report,index) => (
          <>
            <Tbody>
              <Tr>
              <Td>{index + 1}</Td>
                <Td>{report.data.route}</Td>
                {moment.unix(report?.data?.time).fromNow("LL")}
                {moment(report.data.time).fromNow("LL")}
                <Td>
                  <Button>Talk view</Button>
                </Td>
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
