import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';
import Search from './components/search';
import ListItem from './components/listItem';
import { getSumArrayOfObjectsByField, CATEGORIES } from './helpers/helpers'

describe('components', () => {
  test('Render App', () => {
    render(<App />);

    const linkElement = screen.getByText(/Categories/i);
    expect(linkElement).toBeInTheDocument();

    // //list apps
    // const list = screen.getByRole("list", {
    //   name: /apps/i,
    // })
    // const { getAllByRole } = within(list)
    // const items = getAllByRole("listitem")

    // expect(items.length).toBe(1)

    //sidebar
    const list = screen.getByRole("list", {
      name: /sidebar/i,
    })
    const { getAllByRole } = within(list)
    const items = getAllByRole("listitem")

    const sidebarList = items.map(item => item.textContent)

    expect(sidebarList).toEqual(CATEGORIES)
    expect(items.length).toBe(5)
  });

  test('Component Search', () => {
    render(<Search />);

    const input = screen.getByPlaceholderText('Search by App')
    fireEvent.change(input, { target: { value: 'apps' } })
    expect(input.value).toBe('apps')
  });

  test('Component ListItem', () => {
    const data = {
        "id": "9b565b11-7311-5b5e-a699-97873dffb361",
        "name": "Voice Report",
        "description": "Calls reporting and analytics of your calls.",
        "categories": ["Voice Analytics", "Reporting", "Optimization"],
        "subscriptions": [
            {
                "name": "Trial",
                "price": 0
            },
            {
                "name": "Professional",
                "price": 3500
            }
        ]
    }
    render(<ListItem data={data} />);

    const text = screen.getByText(/reporting and analytics/i);
    expect(text).toBeInTheDocument();

    expect(screen.getByText('Reporting')).toBeInTheDocument();

      const { getAllByRole } = within(document.querySelector('.box-info--footer'))
      const plans = getAllByRole('listitem');
      expect(plans.length).toEqual(2)

  });

})

describe('functions', () => {
  test('test getSumArrayOfObjectsByField', () => {
    const arr1 = [
      {
        "name": "Trial",
        "price": 'a'
      },
      {
        "name": "Professional",
        "price": 1200
      },
      {
        "name": "Premium",
        "price": undefined
      }
    ];
    const arr2 = [
      {
        "name": "Trial",
        "price": 0
      },
      {
        "name": "Professional",
        "price": 4500
      },
      {
        "name": "Premium",
        "price": 6000
      }
    ];
    expect(getSumArrayOfObjectsByField(arr1, 'price')).toBe(1200);
    expect(getSumArrayOfObjectsByField(arr2, 'price')).toBe(10500);
    expect(getSumArrayOfObjectsByField(arr2)).toBe(0);
  })
});
