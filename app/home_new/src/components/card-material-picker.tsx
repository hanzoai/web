import { cn } from '@hanzo/ui/util'
import { ImageBlockComponent } from '@hanzo/ui/blocks'

import type { CardMaterial } from '@luxfi/data/commerce/types'

const CardMaterialPicker: React.FC<{
  materials: CardMaterial[]
  selectedMaterial: CardMaterial
  onChange: (material: CardMaterial) => void
  materialClx?: string
}> = ({
  materials,
  selectedMaterial,
  onChange,
  materialClx
}) => {
  return (
    <div className='flex gap-1 sm:gap-3 justify-center'>
      {materials.map(({title, materialImg}, i) => (
        <div
          key={i}
          className={cn(
            'cursor-pointer rounded-full p-0.5',
            title === selectedMaterial?.title && 'outline outline-1 sm:outline-2 outline-foreground',
          )}
          onClick={() => onChange(materials[i])}
        >
          <ImageBlockComponent
            block={{blockType: 'image', ...materialImg}}
            className={cn('h-10 w-10', materialClx)}
          />
        </div>
      ))}
    </div>
  )
}

export {
  CardMaterialPicker as default
}