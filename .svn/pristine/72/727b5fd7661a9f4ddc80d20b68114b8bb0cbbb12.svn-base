import React, { Component } from "react";
import Highlighter from "react-highlight-words";
import { Table, Input, Button, Space } from "antd";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import "./attendance.css";
const data = [
  {
    key: "1",
    codeEmp: 234234234,
    empName: "mohamed",
    address: "New York No. 1 Lake Park",
    date: "24-3-2020",
    section: "it",
    branch: "cairo",
    status: "active",
  },
  {
    key: "2",
    codeEmp: 23,
    empName: "ahmed",
    address: "suhag",
    date: "25-3-2020",
    section: "op",
    branch: "suez",
    status: "inActive",
  },
  {
    key: "3",
    codeEmp: 634,
    empName: "salem",
    address: "dumiat",
    date: "25-7-2018",
    section: "sup",
    branch: "saloom",
    status: "active",
  },
  {
    key: "4",
    codeEmp: 24234,
    empName: "ashraf",
    address: "maadi",
    date: "22-3-2020",
    section: "op",
    branch: "alex",
    status: "active",
  },
  {
    key: "5",
    codeEmp: 634,
    empName: "mohamed",
    address: "new cairo",
    date: "25-3-2016",
    section: "it",
    branch: "ismailia",
    status: "active",
  },
  {
    key: "6",
    codeEmp: 3423,
    empName: "ahmed",
    address: "maadi",
    date: "25-3-2020",
    section: "it",
    branch: "cairo",
    status: "active",
  },
  {
    key: "7",
    codeEmp: 5345353,
    empName: "mohamed",
    address: "New York No. 1 Lake Park",
    date: "25-3-2020",
    section: "it",
    branch: "cairo",
    status: "active",
  },
  {
    key: "8",
    codeEmp: 345345,
    empName: "mustafa",
    address: "hadayeea",
    date: "25-8-2020",
    section: "it",
    branch: "cairo",
    status: "active",
  },
  {
    key: "9",
    codeEmp: 345345,
    empName: "mustafa",
    address: "hadayeea",
    date: "25-8-2020",
    section: "it",
    branch: "cairo",
    status: "active",
  },
  {
    key: "10",
    codeEmp: 345345,
    empName: "mustafa",
    address: "hadayeea",
    date: "25-8-2020",
    section: "it",
    branch: "cairo",
    status: "active",
  },
  {
    key: "11",
    codeEmp: 345345,
    empName: "mustafa",
    address: "hadayeea",
    date: "25-8-2020",
    section: "it",
    branch: "cairo",
    status: "active",
  },
  {
    key: "12",
    codeEmp: 345345,
    empName: "mustafa",
    address: "hadayeea",
    date: "25-8-2020",
    section: "it",
    branch: "cairo",
    status: "active",
  },
  {
    key: "13",
    codeEmp: 345345,
    empName: "mustafa",
    address: "hadayeea",
    date: "25-8-2020",
    section: "it",
    branch: "cairo",
    status: "active",
  },
  {
    key: "14",
    codeEmp: 345345,
    empName: "mustafa",
    address: "hadayeea",
    date: "25-8-2020",
    section: "it",
    branch: "cairo",
    status: "active",
  },
];

class MeasuresTable extends Component {
  state = {
    searchText: "",
    searchedColumn: "",
  };

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age",
      },
    });
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            بحث
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            اعادة بحث
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <FilterOutlined style={{ color: "#FFFFFF" }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const columns = [
      {
        title: "الفرع",
        dataIndex: "branch",
        key: "branch",
        ...this.getColumnSearchProps("branch"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.branch.length - b.branch.length,
      },

      {
        title: "اسم الموظف",
        dataIndex: "empName",
        key: "empName",
        ...this.getColumnSearchProps("empName"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.empName.length - b.empName.length,
      },
      {
        title: "العنوان",
        dataIndex: "address",
        key: "address",
        ...this.getColumnSearchProps("address"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.address.length - b.address.length,
      },
      {
        title: "تاريخ التعيين",
        dataIndex: "date",
        key: "date",
        ...this.getColumnSearchProps("date"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.date - b.date,
      },
      {
        title: "القسم",
        dataIndex: "section",
        key: "section",
        ...this.getColumnSearchProps("section"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.section.length - b.section.length,
      },

      {
        title: "الحالة",
        dataIndex: "status",
        key: "status",
        ...this.getColumnSearchProps("status"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.status.length - b.status.length,
      },
      {
        title: "",
        key: "action",
        render: (text, record) => (
          <Space>
            <Button type="primary" danger ghost>
              إتخاذ إجراء
            </Button>
            <Button type="primary" color="#93C020" ghost>
              تجاوز
            </Button>
          </Space>
        ),
      },
    ];
    return (
      <Table
        columns={columns}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        style={{
          border: "0.5px solid #dcdcdc",
          borderRadius: "2px",
          marginBottom: "2rem",
        }}
        dataSource={data}
        pagination={{
          defaultPageSize: 10,
          position: ["bottomRight"],
          pageSizeOptions: ["10", "20", "30"],
        }}
      />
    );
  }
}

export default MeasuresTable;
