import React from "react";
import { StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

//props: tableHead - string[], tableData - string[][], tableWidth - number

export const InfoTable = props => {
  return (
    <Table
      borderStyle={styles.border}
      style={{ minWidth: props.tableWidth, marginBottom: 10 }}
    >
      <Row
        data={props.tableHead}
        style={styles.head}
        textStyle={styles.headText}
      />
      <Rows data={props.tableData} textStyle={styles.text} />
    </Table>
  );
};

const styles = StyleSheet.create({
  border: { borderWidth: 2, borderColor: "#6d92c5" },
  head: { height: 40, backgroundColor: "#a6c7e8" },
  headText: { fontWeight: "bold", margin: 6 },
  text: { margin: 6 },
});
