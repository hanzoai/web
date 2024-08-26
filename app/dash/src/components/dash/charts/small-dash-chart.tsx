// import { Avatar, Card, CardContent } from '@hanzo/ui/primitives'
//   import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
//   import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
//   import { makeStyles } from '@material-ui/core/styles'
//   import { observer } from 'mobx-react'
//   import moment from 'moment-timezone'
//   import numeral from 'numeral'
//   import React from 'react'
//   import { renderUICurrencyFromJSON } from '@/utils/currency'
//   import { useStore } from '@/stores'
//   import TimeSelect from './time-select'
  
//   const useStyles = makeStyles((theme: any) => ({
//     root: {
//       height: '100%',
//     },
//     content: {
//       alignItems: 'center',
//       display: 'flex',
//     },
//     title: {
//       fontWeight: 700,
//     },
//     successAvatar: {
//       backgroundColor: theme.palette.success.main,
//       height: 56,
//       width: 56,
//     },
//     errorAvatar: {
//       backgroundColor: theme.palette.error.main,
//       height: 56,
//       width: 56,
//     },
//     icon: {
//       height: 32,
//       width: 32,
//     },
//     difference: {
//       marginTop: theme.spacing(2),
//       display: 'flex',
//       alignItems: 'center',
//     },
//     errorDifferenceIcon: {
//       color: theme.palette.error.dark,
//     },
//     errorDifferenceValue: {
//       color: theme.palette.error.dark,
//       marginRight: theme.spacing(1),
//     },
//     successDifferenceIcon: {
//       color: theme.palette.success.dark,
//     },
//     successDifferenceValue: {
//       color: theme.palette.success.dark,
//       marginRight: theme.spacing(1),
//     },
//   }))
  
//   export default observer((props) => {
//     const classes = useStyles()
  
//     const {
//       cardProps,
//       compareValue,
//       displayValue,
//       disablePicker,
//       IconComponent,
//       previousValue,
//       queryField,
//       timeSelectValue,
//       title,
//       useCurrency,
//     } = props
  
//     const {
//       credentialStore,
//       dashboardStore,
//     } = useStore()
  
//     const currency = credentialStore && credentialStore.org ? credentialStore.org.currency : ''
  
//     return (
//       <Card
//         {...cardProps}
//       >
//         <CardContent>
//           <div className='justify-between' >
//             <div>
//               <Typography
//                 className={classes.title}
//                 color='textSecondary'
//                 gutterBottom
//                 variant='body2'
//               >
//                 {title}
//               </Typography>
//               <Hidden smDown>
//                 <Typography variant='h4'>
//                   {
//                     useCurrency
//                       ? numeral(renderUICurrencyFromJSON(currency, displayValue)).format('$0,0.00a')
//                       : numeral(displayValue).format('0,0')
//                   }
//                 </Typography>
//               </Hidden>
//               <Hidden mdUp>
//                 <Typography variant='h6'>
//                   {
//                     useCurrency
//                       ? numeral(renderUICurrencyFromJSON(currency, displayValue)).format('$0,0.00a')
//                       : numeral(displayValue).format('0,0')
//                   }
//                 </Typography>
//               </Hidden>
//             </Grid>
//             <Grid item>
//               { displayValue >= previousValue
//                 ? <Avatar className={classes.successAvatar}>
//                     <IconComponent className={classes.icon} />
//                   </Avatar>
//                 : <Avatar className={classes.errorAvatar}>
//                     <IconComponent className={classes.icon} />
//                   </Avatar>
//               }
//             </Grid>
//           </Grid>
//           <div className={classes.difference}>
//             { compareValue >= previousValue
//               ? <>
//                 <ArrowUpwardIcon className={classes.successDifferenceIcon} />
//                 <Typography
//                   className={classes.successDifferenceValue}
//                   variant='body2'
//                 >
//                   {
//                     previousValue
//                       ? ((compareValue / previousValue) * 100).toFixed(2)
//                       : 100
//                   }%
//                 </Typography>
//               </>
//               : <>
//                 <ArrowDownwardIcon className={classes.errorDifferenceIcon} />
//                 <Typography
//                   className={classes.errorDifferenceValue}
//                   variant='body2'
//                 >
//                   { (-100 + (compareValue / previousValue) * 100).toFixed(2) }%
//                 </Typography>
//               </>
//             }
//             {
//               disablePicker
//                 ? <Typography
//                     variant='body2'
//                   >
//                     Current Period
//                   </Typography>
//                 : <TimeSelect
//                     inputLabel='Change Timeframe'
//                     id={`for-${title}`}
//                     value={timeSelectValue}
//                     onChange={(evt) => {
//                       if (evt.target.value === 'alltime') {
//                         dashboardStore.setDate(queryField, evt.target.value, {
//                           date: credentialStore.org.createdAt,
//                           period: {
//                             interval: 'day',
//                             amount: moment().diff(moment(credentialStore.org.createdAt), 'days'),
//                           },
//                         })
//                       } else {
//                         dashboardStore.setDate(queryField, evt.target.value)
//                       }
//                     }}
//                   />
//             }
//           </div>
//         </CardContent>
//       </Card>
//     )
//   })
  