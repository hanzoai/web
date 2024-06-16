import domains from '../common-auth-domains'

const SetAuthToken: React.FC<{
  authToken: string
}> = ({
  authToken,
}) => {
  return (<>
    {!!authToken && domains.map(({url}) => (
      /* Set auth-token cookie across all Lux domains */
      <img src={`${url}/api/auth/set-auth-token?token=${authToken}`} className='absolute hidden'/>
    ))}
  </>)
}

export default SetAuthToken
