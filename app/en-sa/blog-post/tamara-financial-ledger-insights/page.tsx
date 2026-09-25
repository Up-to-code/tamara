import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-tamara-financial-ledger-insights-header.html';
import body from '@/components/exact/en-sa-blog-post-tamara-financial-ledger-insights-body.html';
import footer from '@/components/exact/en-sa-blog-post-tamara-financial-ledger-insights-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"68725fce5fe95b0ea21ff15c","data-wf-site":"67c184892f7a84b971ff49d9","data-wf-collection":"68725fcd5fe95b0ea21ff138","data-wf-item-slug":"tamara-financial-ledger-insights"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
