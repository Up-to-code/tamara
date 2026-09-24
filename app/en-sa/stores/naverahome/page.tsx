import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-naverahome-header.html';
import body from '@/components/exact/en-sa-stores-naverahome-body.html';
import footer from '@/components/exact/en-sa-stores-naverahome-footer.html';
import inline from '@/components/exact/en-sa-stores-naverahome.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
