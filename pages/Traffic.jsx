import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { getReports } from "../Components/fetchData/FetchData";
import { getFirestore } from "firebase/firestore";
import { firebase } from "../firebase/clientApp";

const Traffic = () => {
  const db = getFirestore(firebase);

  const [reports, setReport] = useState([]);

 getReports(db).then((data) => {
    setReport(data);
  });

  return (
    <TableContainer>
      <Table>
        <Thead>
        </Thead>
        {reports.map((report, index) => (
          <>
            <Tbody>
              <Tr>
                <Td>{index + 1}</Td>
                <Td>{report.data.route}</Td>
                <Td>
                  <Button>Time</Button>
                </Td>
                <Td>{report.data.traffic} </Td>
              </Tr>
            </Tbody>
          </>
        ))}
      </Table>
    </TableContainer>
  );
};

export default Traffic;
