import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-credit-card-processing-for-businesses-header.html';
import body from '@/components/exact/en-sa-credit-card-processing-for-businesses-body.html';
import footer from '@/components/exact/en-sa-credit-card-processing-for-businesses-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"69aa9979d196fd77a63719d6","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
