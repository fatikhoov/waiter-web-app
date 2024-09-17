const FinancialReport = ({ user }) => {
    return (
      <div className="main-financial-wrapper">
        <div className="main-financial-state">
          <p className="main-financial-state-titles">
            <span>Оклад</span>  
            <span>{user.finances.salary ? user.finances.salary.toLocaleString() : 'Не указано'} &#8381;</span> 
            <span>&equiv;</span>
          </p>
          <p className="main-financial-state-titles">
            <span>Чаевые</span>  
            <span>{user.finances.tips ? user.finances.tips.toLocaleString() : 'Не указано'} &#8381;</span> 
            <span>&equiv;</span>
          </p>
          <p className="main-financial-state-titles">
            <span>% с продаж</span>  
            <span>{user.finances.salesPercentage ? user.finances.salesPercentage.toLocaleString() : 'Не указано'} &#8381;</span> 
            <span>&equiv;</span>
          </p>
        </div>
      </div>
    );
  };
  
  export default FinancialReport;
  