import AU_B from './AU-B.ts'
import AG_B from './AG-B.ts'
import AU_CB from './AU-CB.ts'
import AG_CB from './AG-CB.ts'

export default {
  tok: 'LXM',
  label: 'Root',
  titleToken: '',
  ch: [
    /*
    {
      tok: 'AU',
      label: 'Lux Gold',
      desc: "Forge your connection to the real world with Lux Gold, crafted with excellence in Dubai.",
      ch: [
        {
          tok: 'B',
          label: 'Minted Bar',
          imgCode: 'AU_B',
          ch: AU_B
        },
        {
          tok: 'C',
          label: 'Minted Coin',
          imgCode: 'AU_C',
          ch: [
            {
              tok: '1_OZ',
              price: 0,
            }
          ]
        },
        {
          tok: 'CB',
          label: 'Cast Bar',
          imgCode: 'AU_CB',
          ch: AU_CB
        }
      ]
    },
    */
    {
      tok: 'AG',
      desc: 'Get unprecedented access to silver with 1:1 asset-backed Lux Silver NFTs, sovereign ownership of physical silver without management fees, and mine-direct discount pricing.',
      label: 'Lux Silver',
      ch: [
        {
          tok: 'B',
          label: 'Minted Bar',
          imgCode: 'AG_B',
          ch: AG_B
        }, 
        /*
        {
          tok: 'C',
          label: 'Minted Coin',
          imgCode: 'AG_C',
          ch: [
            {
              tok: '1_OZ',
              price: 0,
            }
          ]
        },
        {
          tok: 'CB',
          label: 'Cast Bar',
          imgCode: 'AG_CB',
          ch: AG_CB
        }
        */
      ]
    }
  ], 
}