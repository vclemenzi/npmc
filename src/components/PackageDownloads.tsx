import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import type { PackageDonwloads } from '../types/Package';

interface Props {
  name: string;
}

export default ({ name }: Props) => {
  const [downloads, setDownloads] = useState<PackageDonwloads>();

  useEffect(() => {
    fetch(`https://api.npmjs.org/downloads/range/last-week/${name}`)
      .then((res) => res.json() as Promise<PackageDonwloads>)
      .then((response: PackageDonwloads) => setDownloads(response));
  }, [name]);

  return (
    <div>
      {
        downloads ? (
          <Line
            data={{
              labels: downloads.downloads.map((entry) => { return entry.day.replaceAll("-", '/'); }),
              datasets: [
                {
                  label: `Downloads for ${downloads.package} last week`,
                  data: downloads.downloads.map((entry) => entry.downloads),
                  fill: false,
                  borderColor: 'rgba(75,192,192,1)',
                  borderWidth: 2
                }
              ]
            }}
            options={{
              plugins: {
                title: {
                  display: false,
                }
              },
              scales: {
                x: {
                  type: 'category',
                },
                y: {
                  title: {
                    display: false,
                  }
                }
              }
            }}
          />
        ) : (
          <>Loading...</>
        )
      }
    </div>
  );
};
