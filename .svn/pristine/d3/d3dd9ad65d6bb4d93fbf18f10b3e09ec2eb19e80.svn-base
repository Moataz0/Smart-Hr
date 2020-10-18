import React, { Component } from "react";
import Highlighter from "react-highlight-words";
import { Table, Input, Button, Space } from "antd";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import "./Resignation.css";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
const data = [
  {
    key: "1",
    codeEmp: 234234234,
    empName: "mohamed",
    date: "24-3-2020",
    reason: "سبب تقديم الاستقالة",
  },
  {
    key: "2",
    codeEmp: 23,
    empName: "ahmed",
    date: "25-3-2020",
    reason: "سبب تقديم الاستقالة",
  },
  {
    key: "3",
    codeEmp: 634,
    empName: "salem",
    date: "25-7-2018",
    reason: "سبب تقديم الاستقالة",
  },
  {
    key: "4",
    codeEmp: 24234,
    empName: "ashraf",
    date: "22-3-2020",
    reason: "سبب تقديم الاستقالة",
  },
  {
    key: "5",
    codeEmp: 634,
    empName: "mohamed",
    date: "25-3-2016",
    reason: "سبب تقديم الاستقالة",
  },
  {
    key: "6",
    codeEmp: 3423,
    empName: "ahmed",
    date: "25-3-2020",
    reason: "سبب تقديم الاستقالة",
  },
  {
    key: "7",
    codeEmp: 5345353,
    empName: "mohamed",
    date: "25-3-2020",
    reason: "سبب تقديم الاستقالة",
  },
  {
    key: "8",
    codeEmp: 345345,
    empName: "mustafa",
    date: "25-8-2020",
    reason: "سبب تقديم الاستقالة",
  },
  {
    key: "9",
    codeEmp: 345345,
    empName: "mustafa",
    date: "25-8-2020",
    reason: "سبب تقديم الاستقالة",
  },
  {
    key: "10",
    codeEmp: 345345,
    empName: "mustafa",
    date: "25-8-2020",
    reason: "سبب تقديم الاستقالة",
  },
  {
    key: "11",
    codeEmp: 345345,
    empName: "mustafa",
    date: "25-8-2020",
    reason: "سبب تقديم الاستقالة",
  },
  {
    key: "12",
    codeEmp: 345345,
    empName: "mustafa",
    date: "25-8-2020",
    reason: "سبب تقديم الاستقالة",
  },
  {
    key: "13",
    codeEmp: 345345,
    empName: "mustafa",
    date: "25-8-2020",
    reason: "سبب تقديم الاستقالة",
  },
  {
    key: "14",
    codeEmp: 345345,
    empName: "mustafa",
    date: "25-8-2020",
    reason: "سبب تقديم الاستقالة",
  },
];

class TableData extends Component {
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
        title: "كود الموظف",
        dataIndex: "codeEmp",
        key: "codeEmp",
        ...this.getColumnSearchProps("codeEmp"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.codeEmp.length - b.codeEmp.length,
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
        title: "التاريخ",
        dataIndex: "date",
        key: "date",
        ...this.getColumnSearchProps("date"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.date - b.date,
      },

      {
        title: "سبب الأستقالة",
        dataIndex: "reason",
        key: "reason",
        ...this.getColumnSearchProps("reason"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.reason.length - b.reason.length,
      },
      {
        title: "",
        key: "action",
        render: (text, record) => (
          <Space>
            <SystemUpdateAltIcon size="20" className="downloadIcon" />
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
          marginLeft: "2px",
        }}
        dataSource={data}
        pagination={{
          defaultPageSize: 5,
          position: ["bottomRight"],
          pageSizeOptions: ["10", "20", "30"],
        }}
      />
    );
  }
}

export default TableData;
