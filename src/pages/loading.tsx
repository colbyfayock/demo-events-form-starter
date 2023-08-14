import { useState } from 'react';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Button from '@/components/Button';

function Loading() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Layout>
      <Container className="h-full w-full flex items-center justify-center">
        {!isLoading && (
          <div>
            <h1 className="text-3xl text-center font-bold mb-6">
              Start Your Job
            </h1>
            <p className="text-center mb-6">
              Kick off your processing job.
            </p>
            <p className="text-center">
              <Button onClick={() => setIsLoading(true)}>Start</Button>
            </p>
          </div>
        )}
        {isLoading && (
          <div>
            <h1 className="text-3xl text-center font-bold mb-6">
              Loading
            </h1>
            <p className="text-center mb-6">
              Don&apos;t refresh the page!
            </p>
            <p className="flex justify-center text-center mb-6">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </p>
            <p className="text-center">
              Seriously, don&apos;t!
            </p>
          </div>
        )}
      </Container>
    </Layout>
  )
}

export default Loading;
