<script lang="ts">
  import Account from 'lucide-svelte/icons/user-round'
  import House from 'lucide-svelte/icons/house'
  import Social from 'lucide-svelte/icons/message-circle-question'
  import * as Sidebar from '$lib/components/ui/sidebar'

  const items = [
    {
      title: 'Home',
      icon: House,
      href: '/'
    },
    {
      title: 'Characters',
      icon: Account,
      href: '/characters'
    },
    {
      title: 'About',
      icon: Social,
      href: '/about'
    }
  ]
</script>

<Sidebar.Root>
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupLabel>Navigation</Sidebar.GroupLabel>
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
</Sidebar.Root>
