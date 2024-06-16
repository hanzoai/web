import domains from '../common-auth-domains'

const ClearAuthToken = () => {
  return (<>
    {domains.map(({url}) => (
      /* Clear auth-token cookie across all Lux domains */
      <img src={`${url}/api/auth/clear-auth-token`} className='absolute hidden'/>
    ))}
  </>)
}

export default ClearAuthToken
