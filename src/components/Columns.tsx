import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Column } from "../lib/types/types";
import ColumnDetails from "./ColumnDetails";

const Columns: React.FC<{ columns: Column[] }> = ({ columns }) => (
  <Container>
    <Row className="mt-5">
      {columns.map((column: Column) => (
        <Col key={column.id}>
          <ColumnDetails column={column} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default Columns;
