import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-debt-service-partners-header.html';
import body from '@/components/exact/en-sa-debt-service-partners-body.html';
import footer from '@/components/exact/en-sa-debt-service-partners-footer.html';
import inline from '@/components/exact/en-sa-debt-service-partners.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
