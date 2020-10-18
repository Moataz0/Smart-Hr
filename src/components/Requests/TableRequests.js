import React, { Component } from "react";
import Highlighter from "react-highlight-words";
import { Table, Input, Button, Space, Modal } from "antd";
import { FilterOutlined, SearchOutlined, EyeOutlined } from "@ant-design/icons";
import Grid from "@material-ui/core/Grid";
import "./requests.css";
import Typography from "@material-ui/core/Typography";
const data = [
  {
    key: "1",
    codeEmp: 234234234,
    empName: "mohamed",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    section: "it",
    typeRequest: "مأمورية",
    period: "يوم 1",
    status: "تم الرفض",
  },
  {
    key: "2",
    codeEmp: 23,
    empName: "ahmed",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    section: "op",
    typeRequest: "مأمورية",
    period: "يوم 1",
    status: "تم الرفض ",
  },
  {
    key: "3",
    codeEmp: 634,
    empName: "salem",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    section: "sup",
    typeRequest: "مأمورية",
    period: "يوم 1",
    status: "تم الرفض",
  },
  {
    key: "4",
    codeEmp: 24234,
    empName: "ashraf",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    section: "op",
    typeRequest: "مأمورية",
    period: "يوم 1",
    status: "تم الرفض",
  },
  {
    key: "5",
    codeEmp: 634,
    empName: "mohamed",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    section: "it",
    typeRequest: "مأمورية",
    period: "يوم 1",
    status: "تم الرفض",
  },
  {
    key: "6",
    codeEmp: 3423,
    empName: "ahmed",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    section: "it",
    typeRequest: "مأمورية",
    period: "يوم 1",
    status: "تم الرفض",
  },
  {
    key: "7",
    codeEmp: 5345353,
    empName: "mohamed",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    section: "it",
    typeRequest: "مأمورية",
    period: "يوم 1",
    status: "تم الرفض",
  },
  {
    key: "8",
    codeEmp: 345345,
    empName: "mustafa",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    section: "it",
    typeRequest: "مأمورية",
    period: "يوم 1",
    status: "تم الرفض",
  },
  {
    key: "9",
    codeEmp: 345345,
    empName: "mustafa",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    section: "it",
    typeRequest: "مأمورية",
    period: "يوم 1",
    status: "تم الرفض",
  },
  {
    key: "10",
    codeEmp: 345345,
    empName: "mustafa",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    section: "it",
    typeRequest: "مأمورية",
    period: "يوم 1",
    status: "تم الرفض",
  },
  {
    key: "11",
    codeEmp: 345345,
    empName: "mustafa",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    section: "it",
    typeRequest: "مأمورية",
    period: "يوم 1",
    status: "تم الرفض",
  },
  {
    key: "12",
    codeEmp: 345345,
    empName: "mustafa",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    section: "it",
    typeRequest: "مأمورية",
    period: "يوم 1",
    status: "تم الرفض",
  },
  {
    key: "13",
    codeEmp: 345345,
    empName: "mustafa",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    section: "it",
    typeRequest: "مأمورية",
    period: "يوم 1",
    status: "تم الرفض",
  },
  {
    key: "14",
    codeEmp: 345345,
    empName: "mustafa",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    section: "it",
    typeRequest: "مأمورية",
    period: "يوم 1",
    status: "تم الرفض",
  },
];
const dataAccept = [
  {
    key: "1",
    codeEmp: 234234234,
    empName: "mohamed",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    period: "1 يوم",
    typeRequest: "مأمورية",
  },
  {
    key: "2",
    codeEmp: 23,
    empName: "ahmed",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    period: "1 يوم",
    typeRequest: "مأمورية",
  },
  {
    key: "3",
    codeEmp: 634,
    empName: "salem",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    period: "1 يوم",
    typeRequest: "مأمورية",
  },
  {
    key: "4",
    codeEmp: 24234,
    empName: "ashraf",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    period: "1 يوم",
    typeRequest: "مأمورية",
  },
  {
    key: "5",
    codeEmp: 634,
    empName: "mohamed",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    period: "1 يوم",
    typeRequest: "مأمورية",
  },
  {
    key: "6",
    codeEmp: 3423,
    empName: "ahmed",
    dateFrom: "24-3-2020",
    dateTo: "2-3-2020",
    period: "1 يوم",
    typeRequest: "مأمورية",
  },
];
class TableEmp extends Component {
  state = {
    searchText: "",
    searchedColumn: "",
    modal2Visible: false,
    modalAccept: false,
  };

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  setModalAccept(modalAccept) {
    this.setState({ modalAccept });
  }
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
    const { TextArea } = Input;
    const columns = [
      {
        title: "الإدارة",
        dataIndex: "section",
        key: "section",
        ...this.getColumnSearchProps("section"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.section.length - b.section.length,
      },
      {
        title: "كود البصمة",
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
        title: "التاريخ من",
        dataIndex: "dateFrom",
        key: "dateFrom",
        ...this.getColumnSearchProps("dateFrom"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.dateFrom - b.dateFrom,
      },
      {
        title: "التاريخ الى",
        dataIndex: "dateTo",
        key: "dateTo",
        ...this.getColumnSearchProps("dateTo"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.dateTo - b.dateTo,
      },
      {
        title: "نوع الطلب",
        dataIndex: "typeRequest",
        key: "typeRequest",
        ...this.getColumnSearchProps("typeRequest"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.typeRequest.length - b.typeRequest.length,
      },
      {
        title: "المدة",
        dataIndex: "period",
        key: "period",
        ...this.getColumnSearchProps("period"),
        defaultSortOrder: "descend",
        sorter: (a, b) => a.period.length - b.period.length,
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
            <button
              style={{
                paddingRight: "7px",
                paddingLeft: "7px",
                border: "1px solid #1053AB",
                borderRadius: "2px",
                color: "#1053AB",
              }}
            >
              <EyeOutlined />
            </button>
            <Button
              type="primary"
              onClick={() => this.setModalAccept(true)}
              style={{ backgroundColor: "#93C020", borderColor: "#93C020" }}
            >
              قبول
            </Button>
            <Button
              type="primary"
              onClick={() => this.setModal2Visible(true)}
              style={{ backgroundColor: "#F83939", borderColor: "#F83939" }}
            >
              رفض
            </Button>
          </Space>
        ),
      },
    ];

    const columnsAccept = [
      {
        title: "كود البصمة",
        dataIndex: "codeEmp",
        key: "codeEmp",
      },

      {
        title: "اسم الموظف",
        dataIndex: "empName",
        key: "empName",
      },
      {
        title: "التاريخ من",
        dataIndex: "dateFrom",
        key: "dateFrom",
      },
      {
        title: "التاريخ الى",
        dataIndex: "dateTo",
        key: "dateTo",
      },
      {
        title: "نوع الطلب",
        dataIndex: "typeRequest",
        key: "typeRequest",
      },
      {
        title: "المدة",
        dataIndex: "period",
        key: "period ",
      },
    ];
    return (
      <>
        <Modal
          centered
          width={200}
          visible={this.state.modalAccept}
          onOk={() => this.setModalAccept(false)}
          onCancel={() => this.setModalAccept(false)}
          footer={[
            <Button
              key="back"
              onClick={() => this.setModalAccept(false)}
              style={{
                backgroundColor: "#F83939",
                borderColor: "#F83939",
                color: "#FFF",
              }}
            >
              رفض
            </Button>,
            <Button
              key="submit"
              style={{ backgroundColor: "#93C020", borderColor: "#93C020" }}
              type="primary"
              onClick={() => this.setModalAccept(false)}
            >
              قبول
            </Button>,
          ]}
        >
          <Grid container style={{ marginTop: "40px" }}>
            <Grid lg={12}>
              <p>
                لقد قام محمد عبد الله )مبرمج( بقسم ال IT بطلب اجازه لمدة 5 ايام
              </p>
            </Grid>
            <Grid item xs={2}>
              <p>الادارة :</p>
            </Grid>
            <Grid item xs={10}>
              <p>الخدمات احترافية</p>
            </Grid>
            <Grid item xs={2}>
              <p>القسم:</p>
            </Grid>
            <Grid item xs={10}>
              <p>تكنولوجيا المعلومات</p>
            </Grid>
            <Grid item xs={2}>
              <p>المدير المباشر:</p>
            </Grid>
            <Grid item xs={10}>
              <p>احمد النخيلي</p>
            </Grid>

            <Grid item xs={2}>
              <p>التاريخ من :</p>
            </Grid>
            <Grid item xs={10}>
              <p>4/8/2020</p>
            </Grid>

            <Grid item xs={2}>
              <p>التاريخ الى :</p>
            </Grid>
            <Grid item xs={10}>
              <p>4/8/2020</p>
            </Grid>

            <Grid item xs={2}>
              <p>نوع الاجازة :</p>
            </Grid>
            <Grid item xs={10}>
              <p>اجازه سنوية</p>
            </Grid>

            <Grid item xs={2}>
              <p>السبب :</p>
            </Grid>
            <Grid item xs={10}>
              <p>اريد اجازتى الصيفيه السنوية</p>
            </Grid>

            <Grid item xs={2}>
              <p>مده الاجازه :</p>
            </Grid>
            <Grid item xs={10}>
              <p>6 ايام</p>
            </Grid>
            <Grid lg={12} style={{ textAlign: "center" }}>
              <Table
                title={() => (
                  <p style={{ textAlign: "right" }}>
                    الاجازات الموافق عليها فى نفس توقيت هذا الطلب
                  </p>
                )}
                columns={columnsAccept}
                rowClassName={(record, index) =>
                  index % 2 === 0 ? "table-row-light" : "table-row-dark"
                }
                style={{
                  border: "0.5px solid #dcdcdc",
                  borderRadius: "2px",
                  marginBottom: "2rem",
                }}
                pagination={false}
                dataSource={dataAccept}
              />
            </Grid>
          </Grid>
        </Modal>
        <Modal
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
          footer={[
            <Button key="back" onClick={() => this.setModal2Visible(false)}>
              إلغاء
            </Button>,
            <Button
              key="submit"
              style={{ backgroundColor: "#93C020", borderColor: "#93C020" }}
              type="primary"
              onClick={() => this.setModal2Visible(false)}
            >
              ارسال
            </Button>,
          ]}
        >
          <Grid container style={{ marginTop: "40px" }}>
            <Grid sm={4} style={{ textAlign: "center" }}>
              <label>سبب رفض الطلب</label>
            </Grid>
            <Grid item sm={8}>
              <TextArea rows={4} />
            </Grid>
          </Grid>
        </Modal>
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
      </>
    );
  }
}

export default TableEmp;
