import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-tamara-financial-ledger-insights-header.html';
import body from '@/components/exact/en-sa-blog-post-tamara-financial-ledger-insights-body.html';
import footer from '@/components/exact/en-sa-blog-post-tamara-financial-ledger-insights-footer.html';
import inline from '@/components/exact/en-sa-blog-post-tamara-financial-ledger-insights.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
