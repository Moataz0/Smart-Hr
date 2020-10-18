import React, { Component } from "react";
import Highlighter from "react-highlight-words";
import { Table, Input, Button, Space } from "antd";
import {
  FilterOutlined,
  SearchOutlined,
  EyeOutlined,
  EditOutlined,
} from "@ant-design/icons";
import "./employees.css";
import { connect } from "react-redux";
import { showLoading, hideLoading } from "../actions/loading-action";
import { openAlert } from "../actions/alert-action";
import { get } from "../../API";
class TableEmp extends Component {
  state = {
    searchText: "",
    searchedColumn: "",
    data: [],
  };
  // componentDidMount = () => {
  //   this.props.setChildContext(this);
  //   this.getEmployees(0, {});
  // };

  handleChange = (pagination, filters, sorter) => {
    this.getEmployees(pagination.current - 1, {});
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
    const { total = 10 } = this.state;
    const { branches, departments, positions, status } = this.props.lookUps;
    const columns = [
      {
        title: "كود البصمة",
        dataIndex: "finger_print_id",
        key: "finger_print_id",
        ...this.getColumnSearchProps("finger_print_id"),
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        defaultSortOrder: "descend",
        sorter: (a, b) => a.finger_print_id - b.finger_print_id,
      },
      {
        title: "اسم الموظف",
        dataIndex: "ar_name",
        key: "ar_name",
        ...this.getColumnSearchProps("ar_name"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.ar_name.length - b.ar_name.length,
      },
      // {
      //   title: "العنوان",
      //   dataIndex: "address",
      //   key: "address",
      //   ...this.getColumnSearchProps("address"),
      //   defaultSortOrder: "descend",
      //   sorter: (a, b) => a.address.length - b.address.length,
      // },
      {
        title: "تاريخ التعيين",
        dataIndex: "join_date",
        key: "join_date",
        ...this.getColumnSearchProps("join_date"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.join_date - b.join_date,
      },
      {
        title: "القسم",
        dataIndex: "department_id",
        key: "department_id",
        ...this.getColumnSearchProps("department_id"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.department_id.length - b.department_id.length,
        render: (text, row) => <p> {departments[text]} </p>,
      },
      {
        title: "الفرع",
        dataIndex: "branch_id",
        key: "branch_id",
        ...this.getColumnSearchProps("branch_id"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.branch_id.length - b.branch_id.length,
        render: (text, row) => <p> {branches[text]} </p>,
      },
      {
        title: "الحالة",
        dataIndex: "actual_status",
        key: "actual_status",
        ...this.getColumnSearchProps("actual_status"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.actual_status.length - b.actual_status.length,
        render: (text, row) => <p> {status[text]} </p>,
      },
      {
        title: "",
        key: "action",
        render: (text, record) => (
          <Space>
            <button
              style={{
                paddingRight: "8px",
                paddingLeft: "8px",
                border: "1px solid #1053AB",
                borderRadius: "2px",
                color: "#1053AB",
              }}
            >
              <EyeOutlined />
            </button>
            <button
              style={{
                paddingRight: "8px",
                paddingLeft: "8px",
                border: "1px solid #0FD145",
                borderRadius: "2px",
                color: "#0FD145",
              }}
            >
              <EditOutlined />
            </button>
          </Space>
        ),
      },
    ];
    const { data } = this.state;
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
          total: total,
        }}
        onChange={this.handleChange}
      />
    );
  }
  getEmployees = async (pageNumber = 0, filters = {}) => {
    this.props.showLoading();
    let {
      valid = false,
      msg = "لا يمكن الاتصال بالسيرفر",
      data,
      page,
      per_page,
      total,
    } = await get("employees/get", { page: pageNumber, ...filters });
    if (valid) {
      console.log(data, page, per_page, total);
      this.setState({ data: data, page, per_page, total });
      this.props.openAlert("success", msg);
    } else {
      this.setState({ data: [], page: 0, per_page: 0, total: 0 });
      this.props.openAlert("error", msg);
    }

    this.props.hideLoading();
  };
}
const mapStateToProps = (state) => {
  return {
    lookUps: state.mainData,
  };
};

export default connect(mapStateToProps, {
  showLoading,
  openAlert,
  hideLoading,
})(TableEmp);
