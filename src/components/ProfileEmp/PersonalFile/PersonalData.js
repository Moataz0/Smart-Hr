import React from "react";
import { Collapse } from "antd";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { UserOutlined } from "@ant-design/icons";
import SubdirectoryArrowRightRoundedIcon from "@material-ui/icons/SubdirectoryArrowRightRounded";
import Paper from "@material-ui/core/Paper";
import { Avatar } from "antd";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    textAlign: "center",
  },
  gridData: {
    marginBottom: 20,
  },
}));

export default function PersonalData() {
  const classes = useStyles();
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <div>
      <Collapse accordion>
        <Panel header="البيانات الشخصية" key="1">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
              <Avatar size={84} icon={<UserOutlined />} />
            </Grid>
          </Grid>
          <Grid
            className={classes.gridData}
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                الاسم
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                احمد مصطفى عبد الله
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                تاريخ الميلاد
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                15/4/1990
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                النوع
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                ذكر
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                الجنسية) اختيارى(
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                مصرى
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                رقم كشف الراتب
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                6346346
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                اسم البنك التابع له
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                كريدى اجريكول
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                الوظيفه
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                مطور برمجيات
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                اسم المدير المباشر
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                سيد محمود
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                الحالة الوظيفية الحالية
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                نشط
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                الفرع
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                المكتب الرئيسى
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                المرتبة الوظيفية
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                سينيور
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                تاريخ انتهاء فترة الاختبار
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                15/4/1990
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                رقم التأمين الاجتماعي
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                634637324532
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                رقم البطاقة
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                234235235235
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                محل الميلاد
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                القاهرة
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                الخدمة العسكرية
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                تم تأدية الخدمة العسكرية
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                فصيلة الدم
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                A
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                رقم البصمة
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                1513535
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                رقم الحساب البنكى
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                65658454850964
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                رقم الحساب البنكى
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                65658454850964
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                تاريخ التعيين
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                12/4/2020
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                المسمى الوظيفى للمدير المباشر
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                مدير قسم تكنولوجيا المعلومات
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                تاريخ الانضمام
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                12/3/2020
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                القسم
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                تكنولوجيا المعلومات
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                فريق العمل
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                5 افراد
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                الدرجة الوظيفية
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                الدرجة الثانية
              </Typography>
            </Grid>
          </Grid>
        </Panel>
        <Panel header="العنوان" key="2">
          <Grid
            className={classes.gridData}
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                المدينة
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                الجيزة
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                الحى
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                السادس من اكتوبر
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                الشارع
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                شارع 1
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                المبنى
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                المبنى1
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                الموقع الحالي
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                احصل على الاتجاهات
                <SubdirectoryArrowRightRoundedIcon color="#097BBB" />
              </Typography>
            </Grid>
          </Grid>
        </Panel>
        <Panel header="التليفون والايميل" key="3">
          <Grid
            className={classes.gridData}
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                رقم التليفون
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                021564649846
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                رقم المنزل
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                02494818481
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                ايميل العمل
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                email@smart.com
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                رقم الموبايل
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                01002154841
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                الايميل الشخصى
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                personal@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Panel>
        <Panel header="الحالة الاجتماعية والعائلة" key="4">
          <Grid
            className={classes.gridData}
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                الحالة الاجتماعية
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                متزوج
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                تاريخ الميلاد
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                15 سبتمبر 1990
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                الوظيفة
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                ديفيلوبر
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                المسمى الوظيفى
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                سينيور
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                اسم الزوج/ الزوجة
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                محمود احمد
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                محل الميلاد
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                القاهرة
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                رقم البطاقة
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                29589463213231
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                متي تاريخ الانضمام
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                يناير 2020
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                الادارة التابع لها
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2" gutterBottom>
                سمارت كاردس
              </Typography>
            </Grid>
          </Grid>
        </Panel>
      </Collapse>
      <div style={{ marginTop: "100px", marginBottom: 20 }}>
        <Divider variant="middle" />
      </div>
      <Button
        type="submit"
        variant="contained"
        style={{
          float: "left",
          backgroundColor: "#93C020",
          color: "#FFF",
          width: "154px",
        }}
      >
        تعديل
      </Button>
    </div>
  );
}
