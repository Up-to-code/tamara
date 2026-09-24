import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-homecenter-header.html';
import body from '@/components/exact/en-sa-stores-homecenter-body.html';
import footer from '@/components/exact/en-sa-stores-homecenter-footer.html';
import inline from '@/components/exact/en-sa-stores-homecenter.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
