<script lang="ts">
  import Account from 'lucide-svelte/icons/user-round'
  import House from 'lucide-svelte/icons/house'
  import Social from 'lucide-svelte/icons/message-circle-question'
  import * as Sidebar from '$lib/components/ui/sidebar'
  import Sun from 'lucide-svelte/icons/sun'
  import Moon from 'lucide-svelte/icons/Moon'
  import { Button } from '$lib/components/ui/button'

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

<Sidebar.Root>
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
  <Sidebar.Footer>
    <Button onclick={toggleMode} variant="default" size="icon">
      <Sun
        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon
        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span class="sr-only">Toggle theme</span>
    </Button>
  </Sidebar.Footer>
</Sidebar.Root>
