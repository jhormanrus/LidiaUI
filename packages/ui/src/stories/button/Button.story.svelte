<script lang="ts">
import type { Hst } from '@histoire/plugin-svelte'
import Button from '../../components/button/Button.svelte'

// biome-ignore lint/suspicious/noRedeclare: This is a false positive
export let Hst: Hst
</script>

<Hst.Story
  title="Button"
  layout={{ type: 'grid', width: 240 }}
>

  <Hst.Variant title="primary">
    <Button>Do some hard work</Button>
  </Hst.Variant>

  <Hst.Variant title="secondary">
  </Hst.Variant>

  <Hst.Variant title="destructive">
  </Hst.Variant>

  <Hst.Variant title="outline">
  </Hst.Variant>

  <Hst.Variant title="ghost">
  </Hst.Variant>

  <Hst.Variant title="link">
  </Hst.Variant>

  <Hst.Variant title="icon">
  </Hst.Variant>

  <Hst.Variant title="with icon">
  </Hst.Variant>

  <Hst.Variant title="loading">
  </Hst.Variant>

  <Hst.Variant title="as child">
  </Hst.Variant>

</Hst.Story>
