
const InvestmentTable = ({data}) => {
    
    //  investmentValue: Math.round(investmentValue),
    // interestYear: Math.round(interestYear),
    // totalInterest: Math.round(totalInterest),
    // investedCapital: Math.round(investedCapital)
  return (
        <table className='mx-25'>
            <thead>
                <tr className='text-emerald-800 '>
                <th className='px-6'>Year</th>
                <th className='px-6'>Investment Value</th>{/*p *(1+(r/100))^n */}
                <th className='px-6'>Interest(Year)</th>  {/*annualinvestment *(1+r)^n -1 /r */}
                <th className='px-6'>Total Interest</th>  {/* Investmentvalue - initialinvestment */}
                <th className='px-6'>Invested Capital</th> {/* P + (A*n) */}
{/* initial investment(p), annual investment(A), expected return(r) , duration(n) */}
            </tr>
            </thead>
            <tbody>
                {data.map(row=>(
                    <tr key={row.year}>
                        <td>{row.year}</td>
                        <td>{row.investmentValue}</td>
                        <td>{row.interestYear   }</td>
                        <td>{row.totalInterest}</td>
                        <td>{row.investedCapital}</td>
                    </tr>
                ))}
            </tbody>
        </table>
  )
}

export default InvestmentTable