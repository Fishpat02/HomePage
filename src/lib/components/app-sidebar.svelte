<script lang="ts">
  import Account from 'lucide-svelte/icons/user-round'
  import House from 'lucide-svelte/icons/house'
  import Social from 'lucide-svelte/icons/message-circle-question'
  import * as Sidebar from '$lib/components/ui/sidebar'
  import Sun from 'lucide-svelte/icons/sun'
  import Moon from 'lucide-svelte/icons/Moon'

  import { toggleMode } from 'mode-watcher'

  const items = [
    {
      title: 'Home',
      icon: House,
      href: '/',
    },
    {
      title: 'Characters',
      icon: Account,
      href: '/characters',
    },
    {
      title: 'About',
      icon: Social,
      href: '/about',
    },
  ]
</script>

<Sidebar.Root collapsible="icon">
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each items as item (item.title)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <a href={item.href} {...props}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>
  <Sidebar.Separator />
  <Sidebar.Footer>
    <Sidebar.Menu>
      <Sidebar.MenuButton
        onclick={toggleMode}
        size="sm"
        class="size-fit"
        variant="outline">
        <Sun
          class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon
          class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Sidebar.MenuButton>
    </Sidebar.Menu>
  </Sidebar.Footer>
</Sidebar.Root>
