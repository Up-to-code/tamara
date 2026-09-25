import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-skechers-header.html';
import body from '@/components/exact/en-sa-stores-skechers-body.html';
import footer from '@/components/exact/en-sa-stores-skechers-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"699d7c349de7b124fa0fb12f","data-wf-site":"67c184892f7a84b971ff49d9","data-wf-collection":"699d7c349de7b124fa0fb129","data-wf-item-slug":"skechers"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
