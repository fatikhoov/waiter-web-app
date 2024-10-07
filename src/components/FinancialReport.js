import { Box, Button, Divider } from "@mui/material";

const FinancialReport = ({ user }) => {
    return (
      <>
      <Box>
        <h2 style={{ width: '100%' }}>
         Октябрь: {
         user.finances.salary * user.finances.workDays +
         user.finances.tips +
         user.finances.sales * user.finances.salesPercentage / 100
         } Р
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-between'  }}>
          <div>Оклад</div>
          <div>Чаевые</div>
          <div>Процент</div>
        </div>
        <Divider/>
        <div style={{ display: 'flex', justifyContent: 'space-between'  }}>
          <div>{user.finances.salary * user.finances.workDays} Р</div>
          <div>{user.finances.tips} Р</div>
          <div>{user.finances.sales * user.finances.salesPercentage / 100} Р</div>
        </div>
        <Button variant="contained" style={{ fontSize: '24px', fontWeight: 400, position: 'absolute', right: '16px', bottom: '16px', width: '64px', height: '64px', padding: 0, margin: 0, borderRadius:'100%' }}>
            +
          </Button>
      </Box>
      <Box>
        <h2 style={{ width: '100%' }}>
         Графики
        </h2>
        
      </Box>
    </>
    );
  };
  
  export default FinancialReport;
  