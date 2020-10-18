import React, { Component } from "react";
import Highlighter from "react-highlight-words";
import { Table, Input, Button, Space, Modal } from "antd";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Select } from "antd";
import { FilterOutlined, SearchOutlined, EyeOutlined } from "@ant-design/icons";
import "./attendance.css";
const data = [
  {
    key: "1",
    codeEmp: 234234234,
    empName: "mohamed",
    date: "24-3-2020",
    attend: "00:9 صباحا",
    leave: "50:5 مساءا",
    notes: "مأمورية",
  },
  {
    key: "2",
    codeEmp: 23,
    empName: "ahmed",
    date: "25-3-2020",
    attend: "00:9 صباحا",
    leave: "50:5 مساءا",
    notes: "إذن",
  },
  {
    key: "3",
    codeEmp: 634,
    empName: "salem",
    date: "25-7-2018",
    attend: "00:9 صباحا",
    leave: "50:5 مساءا",
    notes: "df dhdhfadher egsgag",
  },
  {
    key: "4",
    codeEmp: 24234,
    empName: "ashraf",
    date: "22-3-2020",
    attend: "00:9 صباحا",
    leave: "50:5 مساءا",
    notes: "إجازة مرضية",
  },
  {
    key: "5",
    codeEmp: 634,
    empName: "mohamed",
    date: "25-3-2016",
    attend: "00:9 صباحا",
    leave: "50:5 مساءا",
    notes: "df dhdhfadher egsgag",
  },
  {
    key: "6",
    codeEmp: 3423,
    empName: "ahmed",
    date: "25-3-2020",
    attend: "00:9 صباحا",
    leave: "50:5 مساءا",
    notes: "df dhdhfadher egsgag",
  },
  {
    key: "7",
    codeEmp: 5345353,
    empName: "mohamed",
    date: "25-3-2020",
    attend: "00:9 صباحا",
    leave: "50:5 مساءا",
    notes: "",
  },
  {
    key: "8",
    codeEmp: 345345,
    empName: "mustafa",
    date: "25-8-2020",
    attend: "00:9 صباحا",
    leave: "50:5 مساءا",
    notes: "",
  },
  {
    key: "9",
    codeEmp: 345345,
    empName: "mustafa",
    date: "25-8-2020",
    attend: "00:9 صباحا",
    leave: "50:5 مساءا",
    notes: "",
  },
  {
    key: "10",
    codeEmp: 345345,
    empName: "mustafa",
    date: "25-8-2020",
    attend: "00:9 صباحا",
    leave: "50:5 مساءا",
    notes: "",
  },
  {
    key: "11",
    codeEmp: 345345,
    empName: "mustafa",
    date: "25-8-2020",
    attend: "00:9 صباحا",
    leave: "50:5 مساءا",
    notes: "",
  },
  {
    key: "12",
    codeEmp: 345345,
    empName: "mustafa",
    date: "25-8-2020",
    attend: "00:9 صباحا",
    leave: "50:5 مساءا",
    notes: "",
  },
  {
    key: "13",
    codeEmp: 345345,
    empName: "mustafa",
    date: "25-8-2020",
    attend: "00:9 صباحا",
    leave: "50:5 مساءا",
    notes: "",
  },
  {
    key: "14",
    codeEmp: 345345,
    empName: "mustafa",
    date: "25-8-2020",
    attend: "00:9 صباحا",
    leave: "50:5 مساءا",
    notes: "إذن",
  },
];

class TableAttendance extends Component {
  state = {
    searchText: "",
    searchedColumn: "",
    selectedRowKeys: [],
    loading: false,
    modalAttend: false,
  };
  setModalAttend(modalAttend) {
    this.setState({ modalAttend });
  }
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };
  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
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
    const { Option } = Select;
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const columns = [
      {
        title: "كود الموظف",
        dataIndex: "codeEmp",
        key: "codeEmp",
        ...this.getColumnSearchProps("codeEmp"),
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        defaultSortOrder: "descend",
        sorter: (a, b) => a.codeEmp - b.codeEmp,
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
        title: "الحضور",
        dataIndex: "attend",
        key: "attend",
      },
      {
        title: "الأنصراف",
        dataIndex: "leave",
        key: "leave",
      },
      {
        title: "ملاحظات",
        dataIndex: "notes",
        key: "notes",
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
          </Space>
        ),
      },
    ];
    return (
      <>
        <Modal
          centered
          style={{ width: "938px" }}
          visible={this.state.modalAttend}
          footer={[
            <Grid
              container
              style={{
                marginBottom: "52px",
                display: "flex",
                justifyContent: "flex-end",
                paddingLeft: "79px",
              }}
            >
              <Grid item sm={2}>
                <Button
                  key="back"
                  onClick={() => this.setModalAttend(false)}
                  style={{
                    width: "100%",
                    borderColor: "#5E5E5E",
                  }}
                >
                  إلغاء
                </Button>
              </Grid>
              <Grid item sm={2} style={{ marginRight: "22px" }}>
                <Button
                  key="submit"
                  style={{
                    backgroundColor: "#93C020",
                    width: "100%",
                    borderColor: "#93C020",
                  }}
                  type="primary"
                  onClick={() => this.setModalAttend(false)}
                >
                  ارسال
                </Button>
              </Grid>
            </Grid>
          ]}
        >
          <Grid container style={{ marginTop: "52px" }}>
            <Grid sm={1}>
              <label>اضافة</label>
            </Grid>
            <Grid item sm={10}>
              <Select size="default" defaultValue="1" style={{ width: "100%" }}>
                <Option key="1">الكل</Option>
                <Option key="2">الموافق عليها</Option>
                <Option key="3">قيد الأنتظار</Option>
                <Option key="4">المرفوضة</Option>
              </Select>
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: "18px" }}>
            <Grid sm={1}>
              <label>الوقت</label>
            </Grid>
            <Grid item sm={8}>
              <TextField
                variant="outlined"
                required
                InputProps={{
                  style: { height: "40px", fontSize: "15px", width: "98%" },
                }}
                fullWidth
                InputLabelProps={{
                  style: {
                    direction: "rtl",
                  },
                }}
                id="email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item sm={2}>
              <Select size="default" defaultValue="1" style={{ width: "100%" }}>
                <Option key="1">صباحاً</Option>
                <Option key="2">مساءاً</Option>
              </Select>
            </Grid>
          </Grid>
        </Modal>
        <div style={{ marginBottom: 16, textAlign: "left" }}>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `حضور ${selectedRowKeys.length} موظف` : ""}
          </span>
          <Button
            type="primary"
            style={{
              backgroundColor: "#FEA900",
              color: "#FFF",
              borderColor: "#FEA900",
              width: "95px",
            }}
            // onClick={this.start}
            onClick={() => this.setModalAttend(true)}
            disabled={!hasSelected}
            loading={loading}
          >
            إضافة
          </Button>
        </div>
        <Table
          rowSelection={rowSelection}
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
      </>
    );
  }
}

export default TableAttendance;
