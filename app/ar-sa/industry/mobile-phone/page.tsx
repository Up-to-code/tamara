import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-industry-mobile-phone-header.html';
import body from '@/components/exact/ar-sa-industry-mobile-phone-body.html';
import footer from '@/components/exact/ar-sa-industry-mobile-phone-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"682303fdbd459bbf25c50efa","data-wf-site":"67c184892f7a84b971ff49d9","data-wf-collection":"682303fdbd459bbf25c50ee6","data-wf-item-slug":"mobile-phone"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
